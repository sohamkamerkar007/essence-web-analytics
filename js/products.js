const brands=['Zara','Dior','BellaVita','Tom Ford','Nautica'];
const catalog=[
['zara-vibrant-leather','Zara','Vibrant Leather',2990,'Woody'],['zara-red-temptation','Zara','Red Temptation',3490,'Amber'],['zara-applejuice','Zara','Applejuice',2490,'Floral'],['zara-rich-warm-addictive','Zara','Rich Warm Addictive',2990,'Amber'],
['dior-sauvage-edp','Dior','Sauvage Eau de Parfum',11500,'Woody'],['dior-sauvage-elixir','Dior','Sauvage Elixir',18500,'Aromatic'],['dior-homme-intense','Dior','Homme Intense',13200,'Woody'],['dior-miss-dior-edp','Dior','Miss Dior Eau de Parfum',14500,'Floral'],
['bellavita-ceo-man','BellaVita','CEO Man Eau de Parfum',599,'Woody'],['bellavita-glam-woman','BellaVita','Glam Woman Eau de Parfum',599,'Floral'],['bellavita-white-oud','BellaVita','White Oud Eau de Parfum',599,'Amber'],
['tf-oud-wood','Tom Ford','Oud Wood',24500,'Woody'],['tf-tobacco-vanille','Tom Ford','Tobacco Vanille',26500,'Amber'],['tf-lost-cherry','Tom Ford','Lost Cherry',28000,'Floral'],['tf-neroli-portofino','Tom Ford','Neroli Portofino',23500,'Citrus'],
['nautica-voyage','Nautica','Voyage',2990,'Fresh'],['nautica-voyage-heritage','Nautica','Voyage Heritage',3490,'Woody'],['nautica-blue','Nautica','Blue',3290,'Fresh']
];
const products=catalog.map((x,i)=>({id:x[0],brand:x[1],name:x[2],price:x[3],fragranceFamily:x[4],rating:+(4.5+(i%5)*.1).toFixed(1),image:`assets/images/products/${x[0]}.${x[0]==='bellavita-white-oud'?'webp':'jpg'}`,description:`A distinctive ${x[4].toLowerCase()} fragrance designed to leave a lasting impression.`}));
