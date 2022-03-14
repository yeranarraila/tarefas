
import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, FlatList} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import database from "../../config/firebaseconfig";
import styles from "./styles"

export default function Tarefa({navigation}){
    const [tarefa,setTarefa] = useState([]);

    function deletarTarefa(id){
        //recupoerar primeiro o id e depois pede para deletar
        database.collection("Tarefa").doc(id).delete();
    }

    useEffect(() => {
        database.collection("Tarefa").onSnapshot((query) => {
          const list = [];
          query.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id });
          });
          setTarefa(list);
        });
      }, []);

      return (
        <View style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={tarefa}
            renderItem={( { item } )=>{
               return(
              <View style={styles.styleTarefa}>
                <TouchableOpacity
                  style={styles.deleteTarefa}
                  onPress={() => {
                    deletarTarefa(item.id)
                  }}
                >
                <FontAwesome
                  name="star"
                  size={23}
                  color="#F92e6A"
                >
                </FontAwesome>
                </TouchableOpacity>
                <Text
                  style={styles.descricaoTarefa}
                  onPress={()=>
                    navigation.navigate("Detalhes",{
                      id: item.id,
                      description: item.descricao,
                    })
                  }
                >
                {item.descricao}  
                </Text>  
     
              </View>
              )
            }}
          />
          <TouchableOpacity
            style={styles.botaoNovaTarefa}
            onPress={() => navigation.navigate("Nova Tarefa")}
          >
            <Text style={styles.iconeBotao}>+</Text>
          </TouchableOpacity>
        </View>
      )
    
}
