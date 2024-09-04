class Pessoa {
    nome; peso; altura;

    imc(){
        return this.peso / (this.altura * this.altura)
    }

    faixa(){
        let imcv = imc()
        if(imcv < 18.5) {
            return 'Magro'
        }
        else if(imcv < 29.99)
        {
            return 'Normal'
        }
        else if(imcv < 34.99)
        {
            return 'Gordo'
        }
    }
}

export default Pessoa;