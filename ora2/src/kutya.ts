interface IKutya{
    id: number | null;
    nev: string;
    fajta: string;
    nem: string;
    eletkor: string;
    kepUrl: string | null;
}

class Kutya implements IKutya{

    id: number | null;
    nev: string;
    fajta: string;
    nem: string;
    eletkor: string;
    kepUrl: string | null;

    constructor(kutya: IKutya){
        this.id = kutya.id || null;
        this.nev = kutya.nev;
        this.fajta = kutya.fajta;
        this.nem = kutya.nem;
        this.eletkor = kutya.eletkor;
        this.kepUrl = kutya.kepUrl || null;
    }

    get Id(){
        return this.id;
    }
    set Id(id: number | null){
        this.id = id;
    }

    public kutya(): IKutya{
        const kutya: IKutya = {
            id: this.id,
            nev: this.nev,
            fajta: this.fajta,
            nem: this.nem,
            eletkor: this.eletkor,
            kepUrl: this.kepUrl,
        };

        return kutya;
    }
}

export default Kutya
export {IKutya}