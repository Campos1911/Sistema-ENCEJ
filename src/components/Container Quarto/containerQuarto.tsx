import Button from "../Button/button";
import "./style.css"

export default function ContainerQuarto({quarto}:{quarto: string}) {
    return (
        <>
        <div className="box1">
                <div className="center">
                    <h3>{quarto}</h3>
                    <p>Disponível</p>
                </div>
                
                <div className="bttBox">
                    <Button classname="verDetalhes" insideText="Ver detalhes" />
                </div>
            
            </div>
        </>
    );
}