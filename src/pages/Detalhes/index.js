
import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import database from "../../config/firebaseconfig";
import styles from "./styles";
 
//route recupera os parametros
export default function Detalhes({navigation,route}){
    //description vem de description do index de Tarefa que equivale a item.descricao
    const [descricaoEditavel,setDescricaoEditavel] = useState(route.params.description);
    const idTarefa = route.params.id; //id de item.id

    function editTarefa(descricao, id){
        database.collection("Tarefa").doc(id).update({
            descricao: descricaoEditavel,
        })
        navigation.navigate("Tarefas");
      }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={styles.textoInput}
                placeholder="Ex.: Estudar Matemática"
                onChangeText={setDescricaoEditavel}
                value={descricaoEditavel}
            />
            <TouchableOpacity 
                style={styles.botaoSalvar}
                onPress={()=>{editTarefa(descricaoEditavel, idTarefa)}}
            >
                <Text style={styles.iconeSalvar}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}