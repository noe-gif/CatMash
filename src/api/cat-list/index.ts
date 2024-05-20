import axios from 'axios';
import { cat } from 'src/context/types';

interface CatsResponse {
  images: cat[];
}

const cuteNames = [
  'Fluffy',
  'Whiskers',
  'Snowball',
  'Mittens',
  'Socks',
  'Luna',
  'Simba',
  'Bella',
  'Chloe',
  'Oliver',
  'Nala',
  'Shadow',
  'Gizmo',
  'Pumpkin',
  'Patches',
  'Coco',
  'Peanut',
  'Marshmallow',
  'Pumpkin',
  'Tigger',
];

const getRandomCuteName = (): string => {
  const randomIndex = Math.floor(Math.random() * cuteNames.length);
  return cuteNames[randomIndex];
};

const fetchCats = async (): Promise<cat[]> => {
  try {
    const response = await axios.get<CatsResponse>('https://data.latelier.co/cats.json');
    const catsData = response.data;

    const enhancedCats = catsData.images.map((cat) => ({
      ...cat,
      score: 0,
      name: getRandomCuteName(),
    }));

    return enhancedCats;
  } catch (error) {
    console.error('Error fetching cats data:', error);
    throw error;
  }
};

export default fetchCats;
