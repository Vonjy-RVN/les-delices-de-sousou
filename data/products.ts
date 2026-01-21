import { Product } from '@/context/CartContext'

export const products: Product[] = [
  // Gâteaux traditionnels
  {
    id: '1',
    name: 'Tarte aux Pommes Traditionnelle',
    description: 'Tarte aux pommes maison avec une pâte brisée dorée et des pommes fraîches caramélisées',
    price: 24.90,
    category: 'traditionnels',
    image: 'https://images.unsplash.com/photo-1621293954908-6b1d0b0b9ef7?w=800&q=80',
  },
  {
    id: '2',
    name: 'Éclair au Chocolat',
    description: 'Éclair artisanal fourré à la crème pâtissière et ganache au chocolat noir',
    price: 4.50,
    category: 'traditionnels',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80',
  },
  {
    id: '3',
    name: 'Paris-Brest',
    description: 'Pâte à choux garnie d\'une crème mousseline pralinée, décoration à la glace royale',
    price: 18.90,
    category: 'traditionnels',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
  },
  {
    id: '4',
    name: 'Millefeuille Classique',
    description: 'Pâte feuilletée croustillante, crème pâtissière vanille et glaçage royal',
    price: 16.90,
    category: 'traditionnels',
    image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800&q=80',
  },
  // Gâteaux modernes
  {
    id: '5',
    name: 'Gâteau Chocolat-Framboise',
    description: 'Biscuit chocolat, mousse framboise fraîche, glaçage miroir et décorations élégantes',
    price: 32.90,
    category: 'modernes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
  },
  {
    id: '6',
    name: 'Cheesecake Fruits Rouges',
    description: 'Cheesecake crémeux sur base sablée, coulis de fruits rouges et fruits frais',
    price: 28.90,
    category: 'modernes',
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800&q=80',
  },
  {
    id: '7',
    name: 'Entremets Citron Meringué',
    description: 'Entremets citron-yuzu, biscuit cuillère, meringue italienne et zestes confits',
    price: 34.90,
    category: 'modernes',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80',
  },
  {
    id: '8',
    name: 'Opéra Chocolat',
    description: 'Biscuit Joconde, ganache chocolat, café et glaçage chocolat décoratif',
    price: 29.90,
    category: 'modernes',
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4bdcbc7c?w=800&q=80',
  },
  // Salés prestige
  {
    id: '9',
    name: 'Tarte Salée aux Légumes',
    description: 'Pâte brisée maison, légumes de saison, fromage de chèvre et herbes fraîches',
    price: 22.90,
    category: 'sales',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
  },
  {
    id: '10',
    name: 'Quiche Lorraine Premium',
    description: 'Quiche traditionnelle avec lardons fumés, œufs frais et crème fraîche',
    price: 19.90,
    category: 'sales',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&q=80',
  },
  {
    id: '11',
    name: 'Assortiment Salé Événementiel',
    description: 'Assortiment de mini-quiches, bouchées apéritives et petits fours salés (pour 20 personnes)',
    price: 89.90,
    category: 'sales',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
  },
  {
    id: '12',
    name: 'Feuilleté Saumon-Agrumes',
    description: 'Feuilleté croustillant, saumon fumé, crème à l\'aneth et zeste de citron',
    price: 26.90,
    category: 'sales',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
  },
]

export const categories = [
  { id: 'traditionnels', name: 'Gâteaux traditionnels', icon: '🎂' },
  { id: 'modernes', name: 'Gâteaux modernes', icon: '🍰' },
  { id: 'sales', name: 'Salés prestige', icon: '🥐' },
  { id: 'evenements', name: 'Commandes spéciales & événements', icon: '🎉' },
]

export const featuredProducts = ['5', '6', '7', '8']

