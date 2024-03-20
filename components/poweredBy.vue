<template>
    <div class="powered-by" :class="{'horizontal': horizontal}">
        <p class="powered-by__title">powered by</p>
        <a href="https://lupadata.com/" target="_blank" class="powered-by__logo powered-by__logo--lupa"><img src="/images/logo-lupadata.svg" alt="LupaData"/></a>
        <a href="https://h2o.ai/" target="_blank" class="powered-by__logo powered-by__logo--h2o"><img src="/images/h2o-logo.svg" alt="h2o.ai"/></a>
        <a href="https://www.cloudera.com/" target="_blank" class="powered-by__logo powered-by__logo--cloudera"><img src="/images/cloudera-logo.svg" alt="Cloudera"/></a>
    </div>
</template>

<script setup>
    const props = defineProps({
        horizontal: {
            type: Boolean,
            default: false
        }
    })
</script>

<style lang="scss" scoped>
    .powered-by {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        gap: 1.5rem;
        position: absolute;
        top: var(--s3);
        left: var(--s3);
        color: #909090;
        p {
            font-family: var(--display-font);
        }
    }

        .powered-by__logo {
            max-width: 120px;
        }

        .powered-by__logo--lupa {
            max-width: 100px;
        }

        .powered-by__logo--h2o {
            max-width: 60px;
        }

    .horizontal {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        flex-flow: row nowrap;
        gap: 16px;
            .powered-by__logo {
                max-width: 100px;
            }

            .powered-by__logo--lupa {
                max-width: 80px;
            }

            .powered-by__logo--h2o {
                max-width: 40px;
            }
    }
</style>