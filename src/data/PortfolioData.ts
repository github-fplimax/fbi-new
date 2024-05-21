import PLTS_cirata from '../../public/plts cirata.jpg';
import Cimmory from '../../public/cimmory dairyland.png';
import Cluster from '../../public/cluster jaksel.jpg';
import Ariandri from '../../public/ariandri-hotel.png';
import Rancamarya from '../../public/rancamarya.png';
import Safari from '../../public/safari-journey.png';
import Hermina from '../../public/hermina.png';
import Assyifa from '../../public/RS assyifa.png';
import Kodam_Jaya from '../../public/kodam jaya jaktim.png';
import Lapangan_Tenis from '../../public/lapangan tenis.png';

export const PortfolioData = [
    {
        id: 1,
        name: 'PLTS Cirata',
        description : 'west bandung - West java',
        image: PLTS_cirata
    },
    {
        id: 2,
        name: 'cimory dairyland',
        description : 'Bogor - West Java',
        image: Cimmory
    },
    {
        id: 3,
        name: 'Cluster jakarta selatan',
        description : 'pembangunan cluster jakarta selatan',
        image: Cluster
    },
    {
        id: 4,
        name: 'ariandri hotel and resort',
        description : 'Bogor - West java',
        image: Ariandri
    },
    {
        id: 5,
        name: 'rancamaya residence',
        description : 'South Bogor, West java',
        image: Rancamarya
    },
    {
        id:6,
        name: 'safari journey - taman safari',
        description : 'Cisarua - West Java',
        image: Safari
    },
    {
        id:7,
        name: 'hermina hospital',
        description : 'depok - West java',
        image: Hermina
    },
    {
        id:'8',
        name: 'assyifa hospital',
        description : 'Sukabumi - West java',
        image: Assyifa
    },
    
    {
        id:'9',
        name: 'kodam jaya jayakarta',
        description : 'Cawang - East Jakarta',
        image: Kodam_Jaya
    },
] as const;