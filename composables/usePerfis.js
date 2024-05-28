import { ref } from 'vue'

export const usePerfis = () => {
    const perfis = ref(
        [
            {
                "rendaMin": 12000,
                "rendaMax": 50000,
                "idadeMin": 16,
                "idadeMax": 25,
                "genero": "masculino",
                "estadoCivil": "Solteiro",
                "categoria": "4"
            },
            {
                "rendaMin": 12000,
                "rendaMax": 50000,
                "idadeMin": 16,
                "idadeMax": 25,
                "genero": "feminino",
                "estadoCivil": "Solteiro",
                "categoria": "4"
            },
            {
                "rendaMin": 12000,
                "rendaMax": 50000,
                "idadeMin": 26,
                "idadeMax": 35,
                "genero": "feminino",
                "estadoCivil": "Solteiro",
                "categoria": "4"
            },
            {
                "rendaMin": 50000,
                "rendaMax": null,
                "idadeMin": 26,
                "idadeMax": 35,
                "genero": "feminino",
                "estadoCivil": "Solteiro",
                "categoria": "4"
            },
            {
                "rendaMin": 50000,
                "rendaMax": null,
                "idadeMin": 46,
                "idadeMax": 55,
                "genero": "masculino",
                "estadoCivil": "Casado",
                "categoria": "4"
            },
            {
                "rendaMin": 50000,
                "rendaMax": null,
                "idadeMin": 26,
                "idadeMax": 35,
                "genero": "masculino",
                "estadoCivil": "Outros",
                "categoria": "4"
            },
            {
                "rendaMin": 50000,
                "rendaMax": null,
                "idadeMin": 16,
                "idadeMax": 25,
                "genero": "feminino",
                "estadoCivil": "Outros",
                "categoria": "4"
            },
            {
                "rendaMin": 50000,
                "rendaMax": null,
                "idadeMin": 16,
                "idadeMax": 25,
                "genero": "feminino",
                "estadoCivil": "Outros",
                "categoria": "4"
            },
            {
                "rendaMin": 2000,
                "rendaMax": 12000,
                "idadeMin": 26,
                "idadeMax": 35,
                "genero": "masculino",
                "estadoCivil": "Solteiro",
                "categoria": "0"
            },
            {
                "rendaMin": 2000,
                "rendaMax": 12000,
                "idadeMin": 16,
                "idadeMax": 25,
                "genero": "masculino",
                "estadoCivil": "Solteiro",
                "categoria": "0"
            },
            {
                "rendaMin": 2000,
                "rendaMax": 12000,
                "idadeMin": 56,
                "idadeMax": null,
                "genero": "masculino",
                "estadoCivil": "Solteiro",
                "categoria": "0"
            },
            {
                "rendaMin": 50000,
                "rendaMax": null,
                "idadeMin": 36,
                "idadeMax": 45,
                "genero": "feminino",
                "estadoCivil": "Casado",
                "categoria": "0"
            },
            {
                "rendaMin": 50000,
                "rendaMax": null,
                "idadeMin": 16,
                "idadeMax": 25,
                "genero": "feminino",
                "estadoCivil": "Solteiro",
                "categoria": "0"
            },
            {
                "rendaMin": 50000,
                "rendaMax": null,
                "idadeMin": 16,
                "idadeMax": 25,
                "genero": "feminino",
                "estadoCivil": "Casado",
                "categoria": "0"
            },
            {
                "rendaMin": 0,
                "rendaMax": 2000,
                "idadeMin": 36,
                "idadeMax": 45,
                "genero": "feminino",
                "estadoCivil": "Casado",
                "categoria": "0"
            },
            {
                "rendaMin": 2000,
                "rendaMax": 12000,
                "idadeMin": 56,
                "idadeMax": null,
                "genero": "masculino",
                "estadoCivil": "Casado",
                "categoria": "2"
            },
            {
                "rendaMin": 2000,
                "rendaMax": 12000,
                "idadeMin": 36,
                "idadeMax": 45,
                "genero": "masculino",
                "estadoCivil": "Casado",
                "categoria": "2"
            },
            {
                "rendaMin": 2000,
                "rendaMax": 12000,
                "idadeMin": 26,
                "idadeMax": 35,
                "genero": "masculino",
                "estadoCivil": "Outros",
                "categoria": "2"
            },
            {
                "rendaMin": 2000,
                "rendaMax": 12000,
                "idadeMin": 26,
                "idadeMax": 35,
                "genero": "feminino",
                "estadoCivil": "Solteiro",
                "categoria": "2"
            },
            {
                "rendaMin": 2000,
                "rendaMax": 12000,
                "idadeMin": 36,
                "idadeMax": 45,
                "genero": "feminino",
                "estadoCivil": "Casado",
                "categoria": "2"
            },
            {
                "rendaMin": 2000,
                "rendaMax": 12000,
                "idadeMin": 36,
                "idadeMax": 45,
                "genero": "feminino",
                "estadoCivil": "Solteiro",
                "categoria": "2"
            },
            {
                "rendaMin": 0,
                "rendaMax": 2000,
                "idadeMin": 26,
                "idadeMax": 35,
                "genero": "masculino",
                "estadoCivil": "Casado",
                "categoria": "2"
            },{
                "rendaMin": 0,
                "rendaMax": 2000,
                "idadeMin": 36,
                "idadeMax": 45,
                "genero": "masculino",
                "estadoCivil": "Solteiro",
                "categoria": "2"
            },
            {
                "rendaMin": 0,
                "rendaMax": 2000,
                "idadeMin": 26,
                "idadeMax": 35,
                "genero": "feminino",
                "estadoCivil": "Casado",
                "categoria": "2"
            },
            {
                "rendaMin": 0,
                "rendaMax": 2000,
                "idadeMin": 26,
                "idadeMax": 35,
                "genero": "feminino",
                "estadoCivil": "Solteiro",
                "categoria": "2"
            },
            {
                "rendaMin": 2000,
                "rendaMax": 12000,
                "idadeMin": 46,
                "idadeMax": 55,
                "genero": "masculino",
                "estadoCivil": "Casado",
                "categoria": "3"
            },
            {
                "rendaMin": 2000,
                "rendaMax": 12000,
                "idadeMin": 26,
                "idadeMax": 35,
                "genero": "masculino",
                "estadoCivil": "Casado",
                "categoria": "3"
            },
            {
                "rendaMin": 2000,
                "rendaMax": 12000,
                "idadeMin": 46,
                "idadeMax": 55,
                "genero": "feminino",
                "estadoCivil": "Casado",
                "categoria": "3"
            },
            {
                "rendaMin": 0,
                "rendaMax": 2000,
                "idadeMin": 56,
                "idadeMax": null,
                "genero": "masculino",
                "estadoCivil": "Casado",
                "categoria": "3"
            },
            {
                "rendaMin": 0,
                "rendaMax": 2000,
                "idadeMin": 36,
                "idadeMax": 45,
                "genero": "masculino",
                "estadoCivil": "Casado",
                "categoria": "3"
            },
            {
                "rendaMin": 0,
                "rendaMax": 2000,
                "idadeMin": 36,
                "idadeMax": 45,
                "genero": "masculino",
                "estadoCivil": "Solteiro",
                "categoria": "3"
            },
            {
                "rendaMin": 0,
                "rendaMax": 2000,
                "idadeMin": 56,
                "idadeMax": null,
                "genero": "feminino",
                "estadoCivil": "Casado",
                "categoria": "3"
            },
            {
                "rendaMin": 12000,
                "rendaMax": 50000,
                "idadeMin": 36,
                "idadeMax": 45,
                "genero": "masculino",
                "estadoCivil": "Casado",
                "categoria": "1"
            },
            {
                "rendaMin": 50000,
                "rendaMax": null,
                "idadeMin": 16,
                "idadeMax": 25,
                "genero": "masculino",
                "estadoCivil": "Solteiro",
                "categoria": "1"
            },
            {
                "rendaMin": 50000,
                "rendaMax": null,
                "idadeMin": 26,
                "idadeMax": 35,
                "genero": "masculino",
                "estadoCivil": "Solteiro",
                "categoria": "1"
            },
            {
                "rendaMin": 50000,
                "rendaMax": null,
                "idadeMin": 26,
                "idadeMax": 35,
                "genero": "masculino",
                "estadoCivil": "Casado",
                "categoria": "1"
            },
            {
                "rendaMin": 50000,
                "rendaMax": null,
                "idadeMin": 26,
                "idadeMax": 35,
                "genero": "masculino",
                "estadoCivil": "Outros",
                "categoria": "1"
            },
            {
                "rendaMin": 50000,
                "rendaMax": null,
                "idadeMin": 46,
                "idadeMax": 55,
                "genero": "feminino",
                "estadoCivil": "Outros",
                "categoria": "1"
            }
        ]
    )
    
    
    return { perfis }
}