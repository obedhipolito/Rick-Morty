export default function Characters(props) {
    const {characters, setCharacters} = props;

    const resetChacters = () => {
        setCharacters(null);
    };

    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetChacters}>Volver a la home</span>
            <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name}/>
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === "alive" ? (
                                    <>
                                        <span className="alive" />
                                        Alive
                                    </>
                                ) : (
                                    <>
                                        <span className="dead" />
                                        dead
                                    </>
                                )}
                            </h6>
                            <p>
                                <span className="text-gray">Episodios: </span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-gray">Especie: </span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetChacters}>volvel a la home</span>
        </div>
    );
}