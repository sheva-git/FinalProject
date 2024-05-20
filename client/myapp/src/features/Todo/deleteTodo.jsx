import { Button } from "primereact/button"
import { ConfirmPopup } from 'primereact/confirmpopup'; 
import { confirmPopup } from 'primereact/confirmpopup'; 
import { Toast } from "primereact/toast";
import { useEffect, useRef } from "react";
import { useDeleteTodoMutation } from "./todoApiSlice";
const DeleteTodo = ({_id}) => {
    const toast = useRef(null);
    const [deleteTodo, { isError, isSuccess, error }] = useDeleteTodoMutation()
    useEffect(() => {
        if (isSuccess) {
            
            toast.current.show({ severity: 'success', summary: 'הצליח', detail: `מחקת ` });
        }
    }, [isSuccess])
    const accept = () => {
        deleteTodo(_id)
    }
    const confirm = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'בטוח רוצה למחוק?',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            accept,
        });

    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmPopup />
            <Button onClick={confirm} icon="pi pi-trash" rounded aria-label="Bookmark"></Button>
        </>
    )
}
export default DeleteTodo