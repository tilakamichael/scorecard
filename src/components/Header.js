import Button from './Button'

const Header = ({onAdd, showAdd}) => {
    return (
        <header className = 'header'>
            <h1>Scorecard</h1>
            <Button color={showAdd ? '#FF5E6F' : ''} 
            onClick={onAdd} 
            text={showAdd ? 'Close Add' : 'Open Add'}/>
        </header>
    )
}

export default Header
