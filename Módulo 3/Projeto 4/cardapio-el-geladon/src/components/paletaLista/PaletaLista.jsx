import "./PaletaLista.css";
import { useState, useEffect, useCallback } from "react";
import PaletaListaItem from "components/PaletaListaItem/PaletaListaItem";
import { PaletaService } from "services/PaletaService";
import PaletaDetalhesModal from "components/PaletaDetalhesModal/PaletaDetalhesModal";
import { matchByText } from "helpers/utils";

import { ActionMode } from "constants/index";

function PaletaLista({
  paletaCriada,
  mode,
  updatePaleta,
  deletePaleta,
  paletaEditada,
  paletaRemovida,
}) {
  const selecionadas = JSON.parse(localStorage.getItem("selecionadas")) ?? {};
  const [paletas, setPaletas] = useState([]);
  const [paletasFiltradas, setPaletasFiltradas] = useState([]);
  const [paletaSelecionada, setPaletaSelecionada] = useState(selecionadas);
  const [paletaModal, setPaletaModal] = useState(false);

  const adicionarItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: (paletaSelecionada[paletaIndex] || 0) + 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };

  const setSelecionadas = useCallback(() => {
    if (!paletas.length) return;

    const entries = Object.entries(paletaSelecionada);
    const sacola = entries.map((arr) => ({
      paletaId: paletas[arr[0]].id,
      quantidade: arr[1],
    }));

    localStorage.setItem("sacola", JSON.stringify(sacola));
    localStorage.setItem("selecionadas", JSON.stringify(paletaSelecionada));
  }, [paletaSelecionada, paletas]);

  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };

  const getLista = async () => {
    const response = await PaletaService.getLista();
    setPaletas(response);
  };

  const getPaletaById = async (paletaId) => {
    const response = await PaletaService.getById(paletaId);
    const mapper = {
      [ActionMode.NORMAL]: () => setPaletaModal(response),
      [ActionMode.ATUALIZAR]: () => updatePaleta(response),
      [ActionMode.DELETAR]: () => deletePaleta(response),
    };

    mapper[mode]();
  };

  useEffect(() => {
    getLista();
  }, [paletaEditada, paletaRemovida]);

  const adicionaPaletaNaLista = useCallback(
    (paleta) => {
      const lista = [...paletas, paleta];
      setPaletas(lista);
    },
    [paletas]
  );

  const filtroPorTitulo = ({ target }) => {
    const lista = [...paletas].filter(({ titulo }) =>
      matchByText(titulo, target.value)
    );
    setPaletasFiltradas(lista);
  };

  useEffect(() => {
    setSelecionadas();
  }, [setSelecionadas, paletaSelecionada]);

  useEffect(() => {
    if (
      paletaCriada &&
      !paletas.map(({ id }) => id).includes(paletaCriada.id)
    ) {
      adicionaPaletaNaLista(paletaCriada);
    }
    setPaletasFiltradas(paletas);
  }, [adicionaPaletaNaLista, paletaCriada, paletas]);

  return (
    <div className="PaletaLista-Wrapper">
      <input
        className="PaletaLista-filtro"
        onChange={filtroPorTitulo}
        placeholder="Busque uma paleta pelo título"
      />

      <div className="PaletaLista">
        {paletasFiltradas.map((paleta, index) => (
          <PaletaListaItem
            mode={mode}
            key={`PaletaListaItem-${index}`}
            paleta={paleta}
            quantidadeSelecionada={paletaSelecionada[index]}
            index={index}
            onAdd={(index) => adicionarItem(index)}
            onRemove={(index) => removerItem(index)}
            clickItem={(paletaId) => getPaletaById(paletaId)}
          />
        ))}
        {paletaModal && (
          <PaletaDetalhesModal
            paleta={paletaModal}
            closeModal={() => setPaletaModal(false)}
          />
        )}
      </div>
    </div>
  );
}

export default PaletaLista;
