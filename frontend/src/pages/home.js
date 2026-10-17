function ManU(){
    return (
        <img src="./img/Mu2008.jpg" alt="Manchester United"
         style={{ maxWidth: '100%', height: 'auto' }} /> 
    );
}

export default function Home() {
    return (
        <div>
            <h1>Đội bóng tôi yêu Manchester United</h1>
            <ManU />    
        </div>
    );
}