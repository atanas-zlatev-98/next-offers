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
    marginBottom: 20,
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
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  text: {
    fontSize: 12,
  },
});

export const OfferDocument = ({ products }: { products: ProductsType[] }) => {

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Оферта</Text>

        <View style={styles.header}>
          <Text style={styles.headerText}>Продукт</Text>
          <Text style={styles.headerText}>Цена на продукта</Text>
        </View>

        {products.map((product) => (
          <View key={product.id} style={styles.row}>
            <Text style={styles.text}>{product.label}</Text>
            <Text style={styles.text}>{product.value} лв.</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
};