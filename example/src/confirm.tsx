import React from 'react';
import {Button, Text, View} from 'react-native';
import ActionSheet, {
  SheetManager,
  SheetProps,
  SheetProvider,
} from '../../index';

function ConfirmSheet(props: SheetProps) {
  return (
    <ActionSheet
      id={props.sheetId}
      statusBarTranslucent={false}
      drawUnderStatusBar={false}
      gestureEnabled={true}
      containerStyle={{
        paddingHorizontal: 12,
      }}
      springOffset={50}
      defaultOverlayOpacity={0.3}>
      <SheetProvider context="local">
        <View>
          <Text
            style={{
              marginBottom: 10,
              color: 'black',
            }}>
            Pressing yes or no will return the result back to the caller.
          </Text>
          <Button
            title="No"
            onPress={() => {
              SheetManager.show('example-sheet', {
                payload: false,
                context: 'local',
              });
            }}
          />
          <View
            style={{
              height: 10,
            }}
          />
          <Button
            title="Yes"
            onPress={() => {
              SheetManager.hide(props.sheetId, {
                payload: true,
              });
            }}
          />
        </View>
      </SheetProvider>
    </ActionSheet>
  );
}

export default ConfirmSheet;
