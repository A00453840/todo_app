import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

export const Header = () => {
    return (
        <div className="header">
            <PlaylistAddCheckIcon color="secondary" alt="To-do App" sx={{ fontSize: 100 }} />
            <h1>To-do App</h1>
        </div>

    )
}