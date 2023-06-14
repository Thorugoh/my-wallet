import { View } from "react-native";
import { styles } from "./styles";

type StepProp = {
  completeSteps?: number;
  totalSteps: number;
}

export function Steps({completeSteps, totalSteps}: StepProp) {
  function isStepComplete(step: number){
    if(!completeSteps) return false;
    return step < completeSteps;
  }

  return (
    <View style={styles.stepContainer}>
      {
        Array.from({length: totalSteps, }).map((_, index) => {
          return <View style={[styles.stepItem, isStepComplete(index) && styles.completeStep]} />
        })
      }
    </View>
  );
}