<template>
    <main>
        <div class="arc arc--out arc--out-hidden"></div>
        <div class="arc arc--in arc--in-hidden"></div>
        <div class="header translucid">
            <nuxt-link to="/" class="header__backwards">
                <span class="material-symbols-outlined">arrow_back</span> Voltar
            </nuxt-link>
            <powered-by :horizontal="true"></powered-by>
        </div>
        <div class="car-info translucid" id="perfil1">
            <div class="car-info__header">
                <p>Seu carro ideal é</p>
                <h1 class="car-info__title">Hillux SW4 - 2024</h1>
            </div>
            <img src="/images/carros/hilux-front.svg" alt="Hillux SW4" class="car-info__imagem">
            <div class="car-info__stats">
                <p class="subtitulo">Valor médio</p>
                <p class="preco">R$ <b>395</b>.000</p>
                <p class="subtitulo">Características</p>
                <div class="car-info__cards">
                    <div class="car-info__card">
                        <img src="/public/images/gas.svg" alt="Combustível" class="car-info__card-icon" />
                        <p class="car-info__subtle">Combustível</p>
                        <p class="car-info__info">Diesel</p>
                    </div>
                    <div class="car-info__card">
                        <img src="/public/images/velo.svg" alt="Transmissão" class="car-info__card-icon" />
                        <p class="car-info__subtle">Transmissão</p>
                        <p class="car-info__info">Automático</p>
                    </div>
                    <div class="car-info__card">
                        <img src="/public/images/seat.svg" alt="Assentos" class="car-info__card-icon" />
                        <p class="car-info__subtle">Lugares</p>
                        <p class="car-info__info">7 lugares</p>
                    </div>
                </div>
                <nuxt-link to="https://www.toyota.com.br/modelos/sw4" target="_blank" class="car-info__button button" size="l" visual="primary" color="primary">Saiba mais</nuxt-link>
            </div>
            <div class="outros">
                <p class="subtitulo">Você também pode gostar:</p>
                <div class="outros__cards">
                    <div class="outros__card">
                        <h3 class="outros__title">CR-V</h3>
                        <p class="outros__subtitle">Honda</p>
                        <img src="/images/carros/crv-side.png" alt="Honda CR-V" class="outros__image" />
                        <div class="outros__stats">
                            <div class="outros__stat">
                                <img src="/images/gas.svg" alt="Combustível" class="outros__stat-icon" />
                                <p class="outros__stat-info">Gas.</p>
                            </div>
                            <div class="outros__stat">
                                <img src="/images/velo.svg" alt="Transmissão" class="outros__stat-icon" />
                                <p class="outros__stat-info">Autom.</p>
                            </div>
                            <div class="outros__stat">
                                <img src="/images/seat.svg" alt="Assentos" class="outros__stat-icon" />
                                <p class="outros__stat-info">5 lugares</p>
                            </div>
                        </div>
                        <div class="outros__footer">
                            <p class="outros__preco">
                                R$ <b>380</b>.000
                            </p>
                            <nuxt-link to="https://www.honda.com.br/automoveis/crv" target="_blank" class="button" size="s" visual="primary" color="primary">Saiba mais</nuxt-link>
                        </div>
                    </div>
                    <div class="outros__card">
                        <h3 class="outros__title">Trailblazer</h3>
                        <p class="outros__subtitle">Chevrolet</p>
                        <img src="/images/carros/trailblazer-side.png" alt="Chevrolet Trailblazer" class="outros__image" />
                        <div class="outros__stats">
                            <div class="outros__stat">
                                <img src="/images/gas.svg" alt="Combustível" class="outros__stat-icon" />
                                <p class="outros__stat-info">Gas.</p>
                            </div>
                            <div class="outros__stat">
                                <img src="/images/velo.svg" alt="Transmissão" class="outros__stat-icon" />
                                <p class="outros__stat-info">Autom.</p>
                            </div>
                            <div class="outros__stat">
                                <img src="/images/seat.svg" alt="Assentos" class="outros__stat-icon" />
                                <p class="outros__stat-info">5 lugares</p>
                            </div>
                        </div>
                        <div class="outros__footer">
                            <p class="outros__preco">
                                R$ <b>370</b>.000
                            </p>
                            <nuxt-link to="https://www.chevrolet.com.br/suvs/novo-trailblazer" target="_blank" class="button" size="s" visual="primary" color="primary">Saiba mais</nuxt-link>
                        </div>
                    </div>
                    <div class="outros__card">
                        <h3 class="outros__title">Pajero Sport</h3>
                        <p class="outros__subtitle">Mitsubishi</p>
                        <img src="/images/carros/pajero-side.png" alt="Mitsubishi Pajero Sport" class="outros__image" />
                        <div class="outros__stats">
                            <div class="outros__stat">
                                <img src="/images/gas.svg" alt="Combustível" class="outros__stat-icon" />
                                <p class="outros__stat-info">Gas.</p>
                            </div>
                            <div class="outros__stat">
                                <img src="/images/velo.svg" alt="Transmissão" class="outros__stat-icon" />
                                <p class="outros__stat-info">Autom.</p>
                            </div>
                            <div class="outros__stat">
                                <img src="/images/seat.svg" alt="Assentos" class="outros__stat-icon" />
                                <p class="outros__stat-info">7 lugares</p>
                            </div>
                        </div>
                        <div class="outros__footer">
                            <p class="outros__preco">
                                R$ <b>340</b>.000
                            </p>
                            <nuxt-link to="https://www.mitsubishimotors.com.br/suv-e-crossovers/pajero-sport-2022" target="_blank" class="button" size="s" visual="primary" color="primary">Saiba mais</nuxt-link>
                        </div>
                    </div>
                    <div class="outros__card">
                        <h3 class="outros__title">X3</h3>
                        <p class="outros__subtitle">BMW</p>
                        <img src="/images/carros/x3-side.png" alt="BMW X3" class="outros__image" />
                        <div class="outros__stats">
                            <div class="outros__stat">
                                <img src="/images/gas.svg" alt="Combustível" class="outros__stat-icon" />
                                <p class="outros__stat-info">Híb.</p>
                            </div>
                            <div class="outros__stat">
                                <img src="/images/velo.svg" alt="Transmissão" class="outros__stat-icon" />
                                <p class="outros__stat-info">Manual</p>
                            </div>
                            <div class="outros__stat">
                                <img src="/images/seat.svg" alt="Assentos" class="outros__stat-icon" />
                                <p class="outros__stat-info">5 lugares</p>
                            </div>
                        </div>
                        <div class="outros__footer">
                            <p class="outros__preco">
                                R$ <b>440</b>.000
                            </p>
                            <nuxt-link to="https://www.bmw.com.br/pt/all-models/x-series/x3/2021/bmw-x3.html" target="_blank" class="button" size="s" visual="primary" color="primary">Saiba mais</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    window.setTimeout(() => {
        document.querySelector('.arc--out').classList.remove('arc--out-hidden');
    }, 200);

    window.setTimeout(() => {
        document.querySelector('.arc--in').classList.remove('arc--in-hidden');
    }, 500);

    window.setTimeout(() => {
        document.querySelector('.car-info').classList.remove('translucid');
        document.querySelector('.header').classList.remove('translucid');
        document.querySelector('.car-info__imagem').classList.add('car-info__imagem--animate');
    }, 1000);

    window.setTimeout(() => {
        document.querySelector('.arc--out').classList.add('arc--out--activate');
    }, 1200);
});
</script>

<style lang="scss" scoped>
    .header {
        height: 86px;
        position: relative;
        width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        opacity: 1;
        transition: opacity 0.5s ease-out;
    }

        .header__backwards {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            gap: 10px;
        }

        .header__backwards, .header__backwards span {
            color: var(--primary-color);
            font-weight: 600;
            text-decoration: none;
        }

    .arc {
        position: absolute;
        left: 0;
        right: 0;
        border-radius: 56px 56px 0 0;
        transition: top 0.5s ease-out;
    }

        .arc--out {
            top: 86px;
            height: calc(100vh - 86px);
            overflow: hidden;
            background-color: var(--base-color);
            &::before {
                content: '';
                position: absolute;
                height: 170%;
                width: 170%;
                background: linear-gradient(to top, var(--primary-color) 0%, var(--primary-color) 60%, transparent 90%, transparent 100%);
                top: 100%;
                left: 50%;
                border-radius: 0 0 100% 100%;
                transition: transform 0.5s ease-out;
                transform-origin: top;
                transform: translateX(-50%);
            }
        }
            .arc--out--activate::before {
                transform: translateX(-50%) rotate(180deg);
            }

        .arc--in {
            top: 218px;
            height: calc(100vh - 218px);
            overflow: hidden;
            background: var(--white-color)
        }

            .arc--out-hidden,
            .arc--in-hidden {
                top: 100%;
            }

    .car-info {
        position: absolute;
        top: 86px;
        width: 1200px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 1;
        transition: opacity 0.5s ease-out;
    }

        .car-info__header {
            padding-block: 22px;
            *{
                color: var(--white-color);
            }
            p {
                font-size: 1.125em;
                font-weight: 400;
                font-family: var(--display-font);
                margin-bottom: 4px;
            }
            h1 {
                font-size: 3.25em;
                font-weight: 600;
            }
        }

        .car-info__imagem {
            width: 725px;
            position: absolute;
            top: 21px;
            right: 0;
            transform: scale(0.9) translate(10%, -5%);
            transition: transform 20s ease-out;
        }

            .car-info__imagem--animate {
                transform: scale(1) translate(0, 0);
            }

        .car-info__stats {
            display: block;
            margin-top: 41px;
            padding-bottom: 54px;
            width: 100%;
            position: relative;
        }

            .car-info__button {
                position: absolute;
                bottom: 54px;
                right: 0;
            }

            .subtitulo {
                font-size: 1.75em;
                font-weight: 700;
                font-family: var(--display-font);
                margin-bottom: 16px;
                color: var(--base-color);
            }

            .preco {
                color: var(--base-color);
                font-size: 4.125em;
                margin-bottom: 34px;
                b {
                    color: var(--base-color);
                }
            }

        .car-info__cards {
            display: flex;
            flex-flow: row nowrap;
            gap: 16px;
        }

            .car-info__card {
                border-radius: 20px;
                padding: 20px;
                border: 1px solid #E8E8E8;
                width: 168px;
                display: flex;
                flex-flow: column nowrap;
                align-items: flex-start;
            }

            .car-info__card-icon {
                height: 33px;
                width: auto;
                margin-bottom: 10px;
            }

            .car-info__subtle {
                font-family: var(--display-font);
                color: var(--secondary-color);
                font-size: 0.675em;
            }

            .car-info__info {
                font-size: 1.125em;
                font-family: var(--display-font);
                font-weight: 700;
                color: var(--base-color);
            }
    
    .outros {
        padding-bottom: 50px;
    }

        .outros__cards {
            display: flex;
            justify-content: space-between;
        }

        .outros__card {
            width: 288px;
            padding: 18px 18px;
            border: 1px solid #E8E8E8;
            border-radius: 8px;
            transform: translateY(0);
            transition: transform 0.2s ease-out;
            &:hover {
                transform: translateY(-5px);
            }
        }

        .outros__title {
            color: var(--base-color);
            font-size: 0.875em;
            font-weight: 700;
        }

        .outros__subtitle {
            font-size: 0.625em;
            font-weight: 700;
            font-family: var(--display-font);
            margin-bottom: 12px;
        }

        .outros__image {
            width: 200px;
            margin: 0 auto 32px;
        }

        .outros__stats {
            display: flex;
            flex-flow: row nowrap;
            gap: 12px;
            justify-content: center;
            align-items: center;
        }

        .outros__stat {
            display: flex;
            flex-flow: row nowrap;
            gap: 6px;
            align-items: center;
        }

            .outros__stat-icon {
                width: 16px;
            }

            .outros__stat-info {
                font-size: 0.625em;
                font-weight: 500;
                font-family: var(--display-font);
                color: var(--base-color);
            }

        .outros__footer {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: flex-start;
            margin-top: 24px;
        }

        .outros__preco {
            font-size: 1.5em;
            font-weight: 400;
            color: var(--base-color);
            b {
                color: var(--base-color);
            }
        }

        .translucid {
            opacity: 0;
        }
</style>