import { useModalContext } from "../../context/modalContext";
import { HeaderComponent } from "../../styles/components";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    const ModalContext = useModalContext();
    return (
    <HeaderComponent>
        <h1>Jobs Info</h1>
        <IconButton onClick={ModalContext.openModal}>
            {(ModalContext.modalState.open !== true) ? <MenuIcon color="info" style={{height: '40px', width: '40px'}}/> : <CloseIcon color="info" style={{height: '40px', width: '40px'}}/>}
        </IconButton>
    </HeaderComponent>
  )
}