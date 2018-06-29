import portfolio0 from './portfolio0.jpg';
import portfolio1 from './portfolio1.jpg';
import portfolio2 from './portfolio2.jpg';
import portfolio3 from './portfolio3.jpg';
import portfolio4 from './portfolio4.jpg';
import portfolio5 from './portfolio5.jpg';

const photos = [
  portfolio0,
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5
];

for (let i = 0; i < photos.length; i += 1) {
  photos[i] = { src: photos[i], width: 4, height: 3 };
}

export default photos;
