// Marcas personales (PB) en apnea indoor, tomadas del Registro Histórico de Marcas Deportivas
// de la FAAS 2013–2025. Los atletas figuran por CLUB REGATAS SANTA FE / FREEDIVING REGATAS DE SANTA FE.
// Para actualizar: reemplazar la marca de la disciplina con la nueva (valor, fecha ISO y competencia).
// Las marcas que no figuran en el registro llevan una `nota`.

export type Disciplina = "STA" | "DNF" | "DYN" | "DBF" | "SPE";

export interface Marca {
  valor: string;
  /** Fecha ISO de la competencia, si se conoce */
  fecha?: string;
  competencia?: string;
  /** Aclaración cuando la marca no sale del registro FAAS */
  nota?: string;
}

export interface Atleta {
  nombre: string;
  sexo: "M" | "F";
  marcas: Partial<Record<Disciplina, Marca>>;
}

export const disciplinas: { sigla: Disciplina; nombre: string; menorEsMejor?: boolean }[] = [
  { sigla: "STA", nombre: "Apnea estática" },
  { sigla: "DNF", nombre: "Dinámica sin aletas" },
  { sigla: "DYN", nombre: "Dinámica con monoaleta" },
  { sigla: "DBF", nombre: "Dinámica con bialetas" },
  { sigla: "SPE", nombre: "Velocidad 2x50", menorEsMejor: true },
];

export const fuente = {
  nombre: "Registro Histórico de Marcas Deportivas FAAS 2013–2025",
  url: "https://www.faas.org.ar/_files/ugd/bb57a5_6f12179038844f77bbf17395dfc86c30.pdf",
};

export const atletas: Atleta[] = [
  {
    "nombre": "Martín Andrioli",
    "sexo": "M",
    "marcas": {
      "STA": {
        "valor": "6:06.57",
        "fecha": "2024-11-16",
        "competencia": "IV Competencia Nacional de Apnea Indoor Bahía Blanca 2024"
      },
      "DNF": {
        "valor": "129.33 m",
        "fecha": "2025-07-27",
        "competencia": "III Competencia Nacional de Apnea Indoor Buenos Aires 2025"
      },
      "DYN": {
        "valor": "174.50 m",
        "fecha": "2024-10-02",
        "competencia": "CMAS Freediving World Cup Pool Series Barranquilla 2024"
      },
      "DBF": {
        "valor": "158.90 m",
        "fecha": "2024-11-17",
        "competencia": "IV Competencia Nacional de Apnea Indoor Bahía Blanca 2024"
      },
      "SPE": {
        "valor": "0:48.46",
        "fecha": "2025-07-27",
        "competencia": "III Competencia Nacional de Apnea Indoor Buenos Aires 2025"
      }
    }
  },
  {
    "nombre": "Pablo Sale",
    "sexo": "M",
    "marcas": {
      "STA": {
        "valor": "6:36.36",
        "fecha": "2025-09-20",
        "competencia": "IV Competencia Nacional de Apnea Indoor Santa Fe 2025"
      },
      "DNF": {
        "valor": "105.43 m",
        "fecha": "2025-09-20",
        "competencia": "IV Competencia Nacional de Apnea Indoor Santa Fe 2025"
      },
      "DYN": {
        "valor": "125.00 m",
        "fecha": "2025-09-20",
        "competencia": "IV Competencia Nacional de Apnea Indoor Santa Fe 2025"
      },
      "DBF": {
        "valor": "127.60 m",
        "fecha": "2025-11-23",
        "competencia": "V Competencia Nacional de Apnea Indoor Bahía Blanca 2025"
      },
      "SPE": {
        "valor": "1:06.95",
        "fecha": "2025-11-23",
        "competencia": "V Competencia Nacional de Apnea Indoor Bahía Blanca 2025"
      }
    }
  },
  {
    "nombre": "José Emilio Clementi",
    "sexo": "M",
    "marcas": {
      "STA": {
        "valor": "5:47.49",
        "fecha": "2024-11-16",
        "competencia": "IV Competencia Nacional de Apnea Indoor Bahía Blanca 2024"
      },
      "DNF": {
        "valor": "90.55 m",
        "fecha": "2025-07-27",
        "competencia": "III Competencia Nacional de Apnea Indoor Buenos Aires 2025"
      },
      "DYN": {
        "valor": "121.21 m",
        "fecha": "2025-07-27",
        "competencia": "III Competencia Nacional de Apnea Indoor Buenos Aires 2025"
      },
      "DBF": {
        "valor": "126.61 m",
        "fecha": "2024-11-17",
        "competencia": "IV Competencia Nacional de Apnea Indoor Bahía Blanca 2024"
      },
      "SPE": {
        "valor": "1:16.24",
        "fecha": "2025-07-27",
        "competencia": "III Competencia Nacional de Apnea Indoor Buenos Aires 2025"
      }
    }
  },
  {
    "nombre": "Victor Valotto",
    "sexo": "M",
    "marcas": {
      "DBF": {
        "valor": "105.80 m",
        "fecha": "2023-05-28",
        "competencia": "I Competencia Nacional de Apnea en Pileta Santa Fe 2023"
      },
      "STA": {
        "valor": "4:32.98",
        "fecha": "2025-03-30",
        "competencia": "I Competencia Nacional de Apnea Indoor Buenos Aires 2025"
      },
      "DNF": {
        "valor": "63.90 m",
        "fecha": "2025-07-27",
        "competencia": "III Competencia Nacional de Apnea Indoor Buenos Aires 2025"
      },
      "DYN": {
        "valor": "75.00 m",
        "fecha": "2023-11-04",
        "competencia": "III Competencia Nacional de Apnea en Pileta Bahía Blanca 2023"
      },
      "SPE": {
        "valor": "1:44.91",
        "fecha": "2023-11-05",
        "competencia": "III Competencia Nacional de Apnea en Pileta Bahía Blanca 2023"
      }
    }
  },
  {
    "nombre": "Raúl Urquiza",
    "sexo": "M",
    "marcas": {
      "STA": {
        "valor": "4:06.00",
        "fecha": "2022-11-19",
        "competencia": "2ª Fecha Campeonato Argentino FAAS Indoor Bahía Blanca 2022"
      },
      "DYN": {
        "valor": "90.10 m",
        "fecha": "2022-11-19",
        "competencia": "2ª Fecha Campeonato Argentino FAAS Indoor Bahía Blanca 2022"
      },
      "DBF": {
        "valor": "92.12 m",
        "fecha": "2022-11-20",
        "competencia": "2ª Fecha Campeonato Argentino FAAS Indoor Bahía Blanca 2022"
      }
    }
  },
  {
    "nombre": "Alfredo González Uboldi",
    "sexo": "M",
    "marcas": {
      "STA": {
        "valor": "2:24.00",
        "fecha": "2023-05-27",
        "competencia": "I Competencia Nacional de Apnea en Pileta Santa Fe 2023"
      }
    }
  },
  {
    "nombre": "Valentina Riffel Rossetti",
    "sexo": "F",
    "marcas": {
      "STA": {
        "valor": "4:38.26",
        "fecha": "2025-11-22",
        "competencia": "V Competencia Nacional de Apnea Indoor Bahía Blanca 2025"
      },
      "DBF": {
        "valor": "105.73 m",
        "nota": "Informada por la escuela; no figura en el registro FAAS"
      },
      "SPE": {
        "valor": "1:48.24",
        "fecha": "2025-11-23",
        "competencia": "V Competencia Nacional de Apnea Indoor Bahía Blanca 2025"
      }
    }
  },
  {
    "nombre": "Cristina Figueroa Vasquez",
    "sexo": "F",
    "marcas": {
      "STA": {
        "valor": "4:09.24",
        "fecha": "2023-11-04",
        "competencia": "III Competencia Nacional de Apnea en Pileta Bahía Blanca 2023"
      },
      "DNF": {
        "valor": "35.07 m",
        "fecha": "2023-11-04",
        "competencia": "III Competencia Nacional de Apnea en Pileta Bahía Blanca 2023"
      },
      "DYN": {
        "valor": "59.76 m",
        "fecha": "2025-11-22",
        "competencia": "V Competencia Nacional de Apnea Indoor Bahía Blanca 2025"
      },
      "DBF": {
        "valor": "72.10 m",
        "fecha": "2025-11-23",
        "competencia": "V Competencia Nacional de Apnea Indoor Bahía Blanca 2025"
      }
    }
  }
];

/** Convierte una marca a número comparable: segundos para tiempos, metros para distancias. */
export function aNumero(valor: string): number {
  if (valor.endsWith(" m")) return parseFloat(valor);
  const [min, seg] = valor.split(":");
  return Number(min) * 60 + Number(seg);
}

/** Mejor marca de la escuela por disciplina y sexo. */
export function recordsEscuela(sexo: "M" | "F") {
  return disciplinas.map((d) => {
    let mejor: { atleta: Atleta; marca: Marca } | undefined;
    for (const atleta of atletas.filter((a) => a.sexo === sexo)) {
      const marca = atleta.marcas[d.sigla];
      if (!marca) continue;
      const v = aNumero(marca.valor);
      if (!mejor || (d.menorEsMejor ? v < aNumero(mejor.marca.valor) : v > aNumero(mejor.marca.valor))) {
        mejor = { atleta, marca };
      }
    }
    return { disciplina: d, ...mejor };
  });
}
