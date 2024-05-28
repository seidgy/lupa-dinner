<template>
    <main class="main" :class="{'main--after': data.currentTab > 2}">
        <powered-by></powered-by>
        <div class="center content">
            <div class="content__tabs">
                <div class="content__tab | tab tab--active" id="tab-0">
                    <div class="tab__graphic">
                        <div class="tab__marker">
                            <span class="material-symbols-outlined">done</span>
                        </div>
                        <div class="tab__line"></div>
                    </div>
                    <h3 class="tab__title">Informações de crédito</h3>
                </div>
                <div class="content__tab | tab tab--disabled" id="tab-1">
                    <div class="tab__graphic">
                        <div class="tab__marker">
                            <span class="material-symbols-outlined">done</span>
                        </div>
                        <div class="tab__line"></div>
                    </div>
                    <h3 class="tab__title">Quem é você?</h3>
                </div>
                <div class="content__tab | tab tab--disabled" id="tab-2">
                    <div class="tab__graphic">
                        <div class="tab__marker">
                            <span class="material-symbols-outlined">done</span>
                        </div>
                    </div>
                    <h3 class="tab__title">Aonde você mora?</h3>
                </div>
            </div>
            <div class="tab-content" :class="{'left': data.currentTab > 0}">
                <h3 class="tab-content__title">Informações de crédito</h3>
                <div>
                    <p class="tab-content__subtitle">Nos fale um pouco sobre a sua renda e sobre o seu crédito hoje.</p>
                    <p class="tab-content__subtitle">Todos os dados coletados aqui são de uso seguro.</p>
                </div>
                <form class="tab-content__form" ref="infoCredito">
                    <div>
                        <h4 class="tab-content__form-title">Qual a sua renda ?</h4>
                        <p class="tab-content__form-subtitle">Fale a sua renda bruta na data de hoje.</p>
                    </div>
                    <div class="form-field">
                        <span class="error-message" v-if="errors.renda">{{ errors.renda }}</span>
                        <label for="renda" class="form-label">Renda bruta:</label>
                        <input type="text" id="renda" name="renda" class="form-input" placeholder="R$ 10.000,00" validate="required numeric" />
                    </div>
                    <div class="form-field form-field--select" :class="{'form-field--select-open': data.credito}">
                        <span class="error-message" v-if="errors.credito">{{ errors.credito }}</span>
                        <label for="credito" class="form-label">Situação de crédito:</label>
                        <input type="text" id="credito" name="credito" class="form-input form-select" placeholder="Selecione" readonly @focus="toggleSelect('credito')" @blur="toggleSelect('credito')" validate="required"/>
                        <div class="selectionBox">
                            <div class="selectionBox__item" @click="setValue('credito', 'Crédito normal')">Crédito normal</div>
                            <div class="selectionBox__item" @click="setValue('credito', 'Crédito suspenso')">Crédito suspenso</div>
                            <div class="selectionBox__item" @click="setValue('credito', 'Sem bloqueio')">Sem bloqueio</div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="tab-content" :class="{'left': data.currentTab > 1, 'right': data.currentTab < 1}">
                <h3 class="tab-content__title">Quem é você?</h3>
                <div>
                    <p class="tab-content__subtitle">Nos conte um pouco sobre você e como você se identifica hoje.</p>
                    <p class="tab-content__subtitle">Todos os dados coletados aqui são de uso seguro.</p>
                </div>
                <form class="tab-content__form" ref="infoCliente">
                    <div>
                        <h4 class="tab-content__form-title">Dados demográficos</h4>
                        <p class="tab-content__form-subtitle">Fale um pouco sobre você.</p>
                    </div>
                    <div class="form-field">
                        <span class="error-message" v-if="errors.genero">{{ errors.genero }}</span>
                        <label class="form-label">Com qual gênero você se identifica?</label>
                        <div class="form-field__checkboxes">
                            <div class="form-field__checkbox">
                                <input type="radio" class="input-check" id="genero-masculino" name="genero" value="masculino" validate="required" />
                                <label for="genero-masculino" class="check-label">
                                    <span class="material-symbols-outlined">done</span>
                                </label>
                                <label for="genero-masculino" class="check-text-label">Masculino</label>
                            </div>
                            <div class="form-field__checkbox">
                                <input type="radio" class="input-check" id="genero-feminino" name="genero" value="feminino" validate="required" />
                                <label for="genero-feminino" class="check-label">
                                    <span class="material-symbols-outlined">done</span>
                                </label>
                                <label for="genero-feminino" class="check-text-label">Feminino</label>
                            </div>
                            <div class="form-field__checkbox">
                                <input type="radio" class="input-check" id="genero-outro" name="genero" value="outro" validate="required" />
                                <label for="genero-outro" class="check-label">
                                    <span class="material-symbols-outlined">done</span>
                                </label>
                                <label for="genero-outro" class="check-text-label">Prefiro não informar</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-field">
                        <span class="error-message" v-if="errors.data">{{ errors.data }}</span>
                        <label for="dataNascimento" class="form-label">Data de nascimento:</label>
                        <input type="date" id="dataNascimento" name="data" class="form-input" placeholder="dd/mm/aaaa" validate="required" />
                    </div>
                    <div class="form-field form-field--select" :class="{'form-field--select-open': data.estCivil}">
                        <span class="error-message" v-if="errors['est-civil']">{{ errors['est-civil'] }}</span>
                        <label for="est-civil" class="form-label">Estado civil:</label>
                        <input type="text" id="est-civil" name="est-civil" class="form-input form-select" validate="required" placeholder="Selecione" readonly @focus="toggleSelect('estCivil')" @blur="toggleSelect('estCivil')"/>
                        <div class="selectionBox">
                            <div class="selectionBox__item" @click="setValue('est-civil', 'Solteiro')">Solteiro(a)</div>
                            <div class="selectionBox__item" @click="setValue('est-civil', 'Casado')">Casado(a)</div>
                            <div class="selectionBox__item" @click="setValue('est-civil', 'Divorciado')">Divorciado(a)</div>
                            <div class="selectionBox__item" @click="setValue('est-civil', 'Viúvo')">Viúvo(a)</div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="tab-content" :class="{'right': data.currentTab < 2}">
                <h3 class="tab-content__title">Aonde você mora?</h3>
                <div>
                    <p class="tab-content__subtitle">Nos conte aonde você mora.</p>
                    <p class="tab-content__subtitle">Todos os dados coletados aqui são de uso seguro.</p>
                </div>
                <form class="tab-content__form" ref="infoLocalidade">
                    <div>
                        <h4 class="tab-content__form-title">Dados geográficos</h4>
                        <p class="tab-content__form-subtitle">Fale um pouco sobre onde você mora.</p>
                    </div>
                    <div class="form-field">
                        <label class="form-label" for="estado">Estado:</label>
                        <input type="text" id="estado" name="estado" class="form-input" placeholder="Distrito Federal" />
                    </div>
                    <div class="form-field">
                        <label class="form-label" for="cidade">Cidade:</label>
                        <input type="text" id="cidade" name="cidade" class="form-input" placeholder="Brasília" />
                    </div>
                    <div class="form-field">
                        <label class="form-label" for="bairro">Bairro:</label>
                        <input type="text" id="bairro" name="bairro" class="form-input" placeholder="Asa Norte" />
                    </div>
                </form>
            </div>
        </div>
        <button class="button button--icon previous-button" visual="primary" color="primary" @click="previous" icon-before="arrow_back" v-if="data.currentTab > 0">
            Voltar
        </button>
        <button class="button button--icon next-button" visual="primary" color="primary" @click="next" icon-after="arrow_forward">
            Próximo
        </button>
    </main>
</template>

<script setup>
    import { reactive } from 'vue';
    import { useValidation } from "~/composables/useFormValidation";
    import { usePerfis } from "~/composables/usePerfis";
    const router = useRouter();

    const data = reactive({
        currentTab: 0,
        credito: false,
        estCivil: false
    });
    const { validateForm, errors, hasErrors } = useValidation()
    const infoCredito = ref()
    const infoCliente = ref()
    const infoLocalidade = ref()

    const next = () => {
        if(data.currentTab == 0) {
            validateForm(infoCredito.value)
            if(hasErrors.value) {
                return
            }
        }
        if(data.currentTab == 1) {
            validateForm(infoCliente.value)
            if(hasErrors.value) {
                return
            }
        }
        if(data.currentTab == 2) {
            validateForm(infoLocalidade.value)
            if(hasErrors.value) {
                return
            }
        }
        if (data.currentTab < 2) {
            data.currentTab++;
            document.getElementById(`tab-${data.currentTab}`).classList.add('tab--active');
            document.getElementById(`tab-${data.currentTab - 1}`).classList.remove('tab--active');
            document.getElementById(`tab-${data.currentTab - 1}`).classList.add('tab--done');
        } else {
            data.currentTab++;
            window.setTimeout(() => {
                const renda = document.getElementById('renda').value;
                const dataNascimento = document.getElementById('dataNascimento').value;
                const genero = document.querySelector('input[name="genero"]:checked').value;
                const estadoCivil = document.getElementById('est-civil').value;
                const dados = {
                    renda: renda,
                    dataNascimento: dataNascimento,
                    genero: genero,
                    estadoCivil: estadoCivil,
                }
                let perfil = encontrarPerfil(dados);
                router.push(`/resultado?tipo=${perfil}`);
            }, 600);
        }
    }

    const previous = () => {
        if (data.currentTab > 0) {
            data.currentTab--;
            document.getElementById(`tab-${data.currentTab}`).classList.remove('tab--done');
            document.getElementById(`tab-${data.currentTab}`).classList.add('tab--active');
            document.getElementById(`tab-${data.currentTab + 1}`).classList.remove('tab--active');
        }
    }

    function calcularIdade(dataNascimento) {
        const partes = dataNascimento.split('-');
        const ano = parseInt(partes[0], 10);
        const mes = parseInt(partes[1], 10) - 1; // Meses em JavaScript são indexados a partir de 0
        const dia = parseInt(partes[2], 10);
        
        const nascimento = new Date(ano, mes, dia);
        const hoje = new Date();
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const diferencaMeses = hoje.getMonth() - mes;

        if (diferencaMeses < 0 || (diferencaMeses === 0 && hoje.getDate() < dia)) {
            idade--;
        }

        return idade;
    }

    const toggleSelect = (field) => {
        window.setTimeout(() => {
            data[field] = !data[field];
        }, 200);
    }

    const setValue = (field, value) => {
        document.getElementById(field).value = value;
    }

    const encontrarPerfil = (dados) => {
        const idade = calcularIdade(dados.dataNascimento);
        const estadoCivil = dados.estadoCivil === 'Viúvo(a)' || dados.estadoCivil === 'Divorciado(a)' ? 'Outros' : dados.estadoCivil;
        
        const criterios = [
            perfil => (perfil.rendaMin === null || dados.renda >= perfil.rendaMin) &&
                    (perfil.rendaMax === null || dados.renda <= perfil.rendaMax) &&
                    (perfil.idadeMin === null || idade >= perfil.idadeMin) &&
                    (perfil.idadeMax === null || idade <= perfil.idadeMax) &&
                    (perfil.genero === null || dados.genero.toLowerCase() === perfil.genero.toLowerCase()) &&
                    (perfil.estadoCivil === null || estadoCivil === perfil.estadoCivil),
            perfil => (perfil.idadeMin === null || idade >= perfil.idadeMin) &&
                    (perfil.idadeMax === null || idade <= perfil.idadeMax) &&
                    (perfil.genero === null || dados.genero.toLowerCase() === perfil.genero.toLowerCase()) &&
                    (perfil.estadoCivil === null || estadoCivil === perfil.estadoCivil),
            perfil => (perfil.genero === null || dados.genero.toLowerCase() === perfil.genero.toLowerCase()) &&
                    (perfil.estadoCivil === null || estadoCivil === perfil.estadoCivil),
            perfil => perfil.estadoCivil === null || estadoCivil === perfil.estadoCivil
        ];


        const { perfis } = usePerfis();
         
        for (let perfil of perfis.value) {
            if (
                (perfil.rendaMin === null || dados.renda >= perfil.rendaMin) &&
                (perfil.rendaMax === null || dados.renda <= perfil.rendaMax) &&
                (perfil.idadeMin === null || idade >= perfil.idadeMin) &&
                (perfil.idadeMax === null || idade <= perfil.idadeMax) &&
                (perfil.genero === null || dados.genero.toLowerCase() === perfil.genero.toLowerCase()) &&
                (perfil.estadoCivil === null || estadoCivil === perfil.estadoCivil)
            ) {
                return perfil.categoria;
            }
        }

        // Se não encontrar correspondência exata
        let perfil = null;
        if (dados.estadoCivil == 'Solteiro') {
            perfil = '2';
        } else if (dados.estadoCivil == 'Casado') {
            perfil = '3';
        } else if (dados.estadoCivil == 'Divorciado') {
            perfil = '0';
        } else if (dados.estadoCivil == 'Viúvo') {
            perfil = '1';
        }

        return perfil;
    }
</script>

<style scoped lang="scss">
main {
    background-color: var(--white-color);
    padding: var(--s3);
    transition: all 0.5s ease-out;
    opacity: 1;
}

    .main--after {
        opacity: 0;
    }

    .button {
        position: absolute;
        bottom: var(--s3);
        left: var(--s3);
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        z-index: 0;
        z-index: 999;
    }

    .next-button {
        right: var(--s3);
        left: auto;
    }

.content {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    height: 110vh;
    position: relative;
    z-index: 1;
}

.content__tabs {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
}

.tab {
    flex-grow: 1;
    flex-shrink: 0;
    display: flex;
    flex-flow: column nowrap;
    gap: 10px;
    --tab-color: #ABB7C2;
    --border-color: hsla(234, 100%, 64%, 0.01);
    --tab-bg: hsla(234, 100%, 64%, 0.1);
}

.tab__graphic {
    display: flex;
    flex-flow: row nowrap;
    gap: 24px;
    align-items: center;
}

.tab__marker {
    position: relative;
    border: 1px solid var(--border-color);
    border-radius: 50%;
    height: 18px;
    width: 18px;
    background-color: var(--tab-bg);
    transition: 0.2s 0.3s all ease-in-out;
    &::before {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--tab-color);
        border-radius: 50%;
        transition: 0.2s 0.3s all ease-in-out;
    }
    .material-symbols-outlined {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 0.75em;
        font-weight: 700;
        color: transparent;
        transition: 0.2s 0.3s all ease-in-out;
    }
}

.tab__line {
    position: relative;
    flex-grow: 1;
    height: 1px;
    background-color: #CFD6DC;
    &:before {
        content: '';
        height: 1px;
        background-color: var(--primary-color);
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 100%;
        transition: 0.3s all ease-in-out;
    }
}

.tab__title {
    font-size: 0.875em;
    font-weight: 700;
    color: var(--tab-color);
    transition: 0.2s 0.3s all ease-in-out;
}

.tab--active {
    --tab-color: var(--primary-color);
    --border-color: var(--primary-color);
    --tab-bg: var(--white-color);
    .tab__marker {
        &::before {
            width: 10px;
            height: 10px;
        }
    }
}

.tab--done {
    --tab-color: var(--primary-color);
    --border-color: var(--primary-color);
    --tab-bg: var(--primary-color);
    .tab__marker {
        &::before {
            width: 20px;
            height: 20px;
        }
    }
    .tab__line {
        &:before {
            right: 0;
        }

    }
    .material-symbols-outlined {
        color: var(--white-color);
    }
}

.tab-content {
    width: 570px;
    display: flex;
    flex-flow: column nowrap;
    gap: 24px;
    position: absolute;
    top: 150px;
    opacity: 1;
    transform: translateX(0);
    transition: 0.5s all ease-in-out;
}

    .tab-content.left {
        transform: translateX(-100%);
        opacity: 0;
    }

    .tab-content.right {
        transform: translateX(100%);
        opacity: 0;
    }

    .tab-content__title {
        font-size: 2em;
        font-weight: 700;
    }

    .tab-content__subtitle {
        color: var(--secondary-color);
        font-size: 1em;
        font-weight: 300;
    }

    .tab-content__form {
        border-radius: 8px;
        border: 1px solid #E2E4E5;
        padding: 32px;
        display: flex;
        flex-flow: column nowrap;
        gap: 32px;
        margin-top: 16px;
    }

    .tab-content__form-title {
        font-size: 1.25em;
        font-weight: 600;
        color: var(--base-color);
    }

    .tab-content__form-subtitle {
        font-size: 0.75em;
        font-weight: 300;
        color: var(--secondary-color);
    }

    .form-field {
        position: relative;
        display: flex;
        flex-flow: column nowrap;
        gap: 8px;
        z-index: 1;
    }

        .form-field--select {
            &::before {
                content: '';
                display: block;
                height: 0;
                width: 0;
                position: absolute;
                bottom: 13px;
                right: 7px;
                border-top: 5px solid var(--base-color);
                border-right: 5px solid transparent;
                border-left: 5px solid transparent;
                border-bottom: 5px solid transparent;
                transition: 0.2s all ease-in-out;
            }
        }

        .form-field--select-open {
            &::before {
                transform: rotateX(180deg);
            }
            .selectionBox {
                display: block;
            }
        }

    .selectionBox {
        display: none;
        position: absolute;
        top: 105%;
        left: 0;
        right: 0;
        padding: 10px;
        z-index: 1;
        background-color: var(--white-color);
    }

        .selectionBox__item {
            position: relative;
            z-index: 1;
            cursor: pointer;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 1.125em;
            font-weight: 400;
            font-family: var(--display-font);
            transition: 0.2s background-color ease-in-out;
            &:hover {
                background-color: var(--primary-color);
                color: var(--white-color);
                font-weight: 700;
            }
        }

    .form-label {
        font-size: 0.875em;
        font-family: var(--display-font);
    }

    .form-input {
        padding: 8px 16px;
        font-size: 1.125em;
        color: var(--primary-color);
        border: none;
        border-bottom: 1px solid #E2E4E5;
        font-weight: 700;
        outline: none;
        &::placeholder {
            color: var(--secondary-color);
            font-weight: 400;
        }
    }

    .form-select {
        cursor: pointer;
    }

    .form-field__checkboxes {
        display: flex;
        flex-flow: row nowrap;
        gap: 24px;
    }

    .form-field__checkbox {
        display: flex;
        flex-flow: row nowrap;
        gap: 12px;
    }

    .check-text-label {
        font-family: var(--display-font);
        color: var(--base-color);
        font-weight: 400;
        cursor: pointer;
    }

    .input-check {
        display: none;
    }
    
    .check-label {
        position: relative;
        height: 18px;
        width: 18px;
        border-radius: 2px;
        background-color: #C9C9C9;
        transition: 0.2s all ease-in-out;
        cursor: pointer;
        span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 1em;
            font-weight: 700;
            color: transparent;
            transition: 0.2s all ease-in-out;
        }
    }

    .input-check:checked + .check-label {
        background-color: var(--primary-color);
        span {
            color: var(--white-color);
        }
    }

.hidden {
    display: none;
}

.error-message {
  background-color: #F8D7DA; /* Cor de fundo vermelho claro */
  color: #8B0000; /* Cor de fonte vermelho escuro */
  font-size: 0.75em;
  padding: 8px 6px;
  border-radius: 3px;
}
</style>
