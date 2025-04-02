import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

// Componente Item (Filme ou Série)
const Item = ({ nome, ano, diretor, tipo, imagem, temporadas }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <Text style={styles.titulo}>{nome} ({ano})</Text>
      <Text style={styles.texto}>Diretor: {diretor}</Text>
      {tipo && <Text style={styles.texto}>Gênero: {tipo}</Text>}
      {temporadas && <Text style={styles.texto}>Temporadas: {temporadas}</Text>}
    </View>
  );
};

export default function App() {
  const listaFilmes = [
    {
      nome: "A Doce Vida",
      ano: 1960,
      diretor: "Federico Fellini",
      tipo: "Drama",
      capa: "https://upload.wikimedia.org/wikipedia/pt/0/04/La_Dolce_Vita.jpg"
    },
    {
      nome: "Psicose",
      ano: 1960,
      diretor: "Alfred Hitchcock",
      tipo: "Terror",
      capa: "https://upload.wikimedia.org/wikipedia/commons/7/76/Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg"
    },
    {
      nome: "O Beijo da Mulher Aranha",
      ano: 1985,
      diretor: "Hector Babenco",
      tipo: "Drama",
      capa: "https://upload.wikimedia.org/wikipedia/pt/8/8b/Kiss_Of_The_Spiderwoman.jpg"
    },
    {
      nome: "Poltergeist - O Fenômeno",
      ano: 1982,
      diretor: "Tobe Hooper",
      tipo: "Terror",
      capa: "https://upload.wikimedia.org/wikipedia/pt/1/14/Poltergeist_%281982%29_-_poster.png"
    }
  ];

  const listaSeries = [
    {
      nome: "Buffy, a Caça-Vampiros",
      ano: 1997,
      diretor: "Joss Whedon",
      temporadas: 7,
      capa: "https://media.fstatic.com/tzySmw5lcp0Zfsfz4pmI6gdlSBA=/322x478/smart/filters:format(webp)/media/movies/covers/2012/07/8c97564608e7b75e8ed2c91cb605c2fc.jpg"
    },
    {
      nome: "Desperate Housewives",
      ano: 2004,
      diretor: "Marc Cherry",
      temporadas: 8,
      capa: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Desperate_Housewives_Logo.svg"
    },
    {
      nome: "Sons of Anarchy",
      ano: 2008,
      diretor: "Kurt Sutter",
      temporadas: 7,
      capa: "https://upload.wikimedia.org/wikipedia/pt/7/7b/SOATitlecard.jpg"
    }
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>🎬 Filmes</Text>
        {listaFilmes.map((filme, index) => (
          <Item
            key={index}
            nome={filme.nome}
            ano={filme.ano}
            diretor={filme.diretor}
            tipo={filme.tipo}
            imagem={filme.capa}
          />
        ))}

        <Text style={styles.header}>📺 Séries</Text>
        {listaSeries.map((serie, index) => (
          <Item
            key={index}
            nome={serie.nome}
            ano={serie.ano}
            diretor={serie.diretor}
            temporadas={serie.temporadas}
            imagem={serie.capa}
          />
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 50,
    alignItems: 'center'
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
    width: 300
  },
  imagem: {
    width: 200,
    height: 280,
    borderRadius: 10,
    marginBottom: 10
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  texto: {
    fontSize: 14,
    textAlign: 'center'
  }
});
