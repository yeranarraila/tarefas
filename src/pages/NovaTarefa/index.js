
import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import database from "../../config/firebaseconfig";
import styles from "./styles";
 
export default function NovaTarefa({ navigation }, props) {
 
  const [descricao, setDescricao] = useState(null);
 
  function addTarefa(){
    database.collection('Tarefa').add({
      descricao: descricao,
      status: false
    })
    navigation.navigate("Tarefas");
  }
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={styles.textoInput}
                placeholder="Ex.: Estudar Matemática"
                onChangeText={setDescricao}
                value={descricao}
            />
            <TouchableOpacity 
                style={styles.botaoSalvar}
                onPress={()=>{addTarefa()}}
            >
                <Text style={styles.iconeSalvar}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}