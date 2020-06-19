export const state = () => ({
    text: ''
})

export const mutations = {
    setText(state, newText) {
        state.text = newText
    }
}
