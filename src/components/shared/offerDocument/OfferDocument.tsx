import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { ProductsType } from '@/src/types/products';
import { Font } from '@react-pdf/renderer';

Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
      fontWeight: 'normal',
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
      fontWeight: 'bold',
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Roboto',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f9fafb',
    padding: 10,
    borderRadius: 4,
    marginBottom: 8,
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  text: {
    fontSize: 12,
    fontWeight:'bold',
  },
  textPrice:{
    display: 'flex',
    flexDirection: 'column',
  },
  price:{
    alignItems:'center',
    justifyContent:'center',
  }
});

export const OfferDocument = ({ products, manufacturer }: { products: ProductsType[], manufacturer: string }) => {

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Ценова листа</Text>
          {manufacturer && <Text style={{ fontSize: 14, marginBottom: 25, fontWeight: 'bold' }}>Производител: {manufacturer}</Text>}
        <View style={styles.header}>
          <Text style={styles.headerText}>Продукт</Text>
          <Text style={styles.headerText}>Цена на продукта</Text>
        </View>

        {products.map((product) => (
          <View key={product.id} style={styles.row}>
            <Text style={styles.text}>{product.label}</Text>
            <View style={styles.price}>
              <Text style={styles.text}>{product.value} {product.unit === "euro-br" ? "€ / бр." : "€ / кг."}</Text>
              <Text style={styles.text}>{(product.value * 1.95583).toFixed(2)} {product.unit === "euro-br" ? "лв. / бр." : "лв. / кг."}</Text>
            </View>
          </View>
        ))}
      </Page>
    </Document>
  );
};