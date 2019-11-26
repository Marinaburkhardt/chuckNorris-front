import Swal from 'sweetalert2'


export const Alerts = {
    showAlert(titulo, texto, tipo) {
        Swal.fire({
            title: titulo,
            text: texto,
            icon: tipo,
        })
    }
}
