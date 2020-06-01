<template>
    <transition name="succ-modal-fade">
        <div class="succ-modal-backdrop">
            <div class="succ-modal"
                 role="dialog"
                 aria-labelledby="modalTitle"
                 aria-describedby="modalDescription"
            >
                <header
                        class="succ-modal-header"
                        id="modalTitle"
                >
                    <slot name="header">
                        This is the default tile!
                    </slot>
                        <button
                                type="button"
                                class="succ-btn-close"
                                @click="close"
                                aria-label="Close modal"
                        >
                            x
                        </button>

                </header>
                <section
                        class="succ-modal-body"
                        id="modalDescription"
                >
                    <slot name="body">
                        I'm the default body!
                    </slot>
                </section>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'success-message',
        methods: {
            close() {
                this.$emit('close');
            },
        },
    };
</script>
<style scoped>
    .succ-modal-backdrop {
        z-index: 9;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .succ-modal {
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        -moz-border-radius: 5px; /* Firefox */
        -webkit-border-radius: 5px; /* Safari, Google Chrome */
        -khtml-border-radius: 5px; /* KHTML */
        -o-border-radius: 5px; /* Opera */
        -ms-border-radius: 5px; /* IE8 */
        border-radius: 5px; /* CSS3 */
        width: 80%;
        padding: 11px;
        max-width: 650px;
    }

    .succ-modal-header {
        border-bottom: 1px solid #eeeeee;
        color: #3b73fc;
        justify-content: space-between;
        padding: 15px;
        display: flex;
        font-size: 22px;
    }

    .succ-modal-body {
        position: relative;
        padding: 20px 10px;
    }

    .succ-btn-close {
        border: none;
        font-size: 20px;
        cursor: pointer;
        font-weight: bold;
        color: #3b73fc;
        background: transparent;
        padding: 1px 20px;
        margin-top: -5px;
    }
</style>
