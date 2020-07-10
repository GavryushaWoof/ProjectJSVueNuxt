export default function({ store, redirect }) {
    if (!store.getters["user/token"]) {
        redirect('/')
    }
}