import { Drawer, ListItem, ListItemText } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const SideBar = ({ list, open, setCurrentHeader, setOpen, anchor }) => {
    const navigate = useNavigate();

    const onItemClick = item => {
        setCurrentHeader(item.header);
        navigate(item.path);
    }

    const getList = () => (
        <div style={{ width: 250 }} onClick={() => setOpen(false)}>
            {list.map((item, index) => (
                <ListItem button key={index}>
                    <ListItemText onClick={() => onItemClick(item)} primary={item.name} />
                </ListItem>
            ))}
        </div>
    );

    return (
        <Drawer open={open} anchor={anchor} onClose={() => setOpen(false)}>
            {getList()}
        </Drawer>
    )
}

export default SideBar