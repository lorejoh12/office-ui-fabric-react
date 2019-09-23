import * as React from 'react';
import { ExampleCard, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';
import { WeeklyDayPickerInlineExample } from '../WeeklyDayPicker/examples/WeeklyDayPicker.Inline.Example';
import { WeeklyDayPickerInlineExpandableExample } from '../WeeklyDayPicker/examples/WeeklyDayPicker.Inline.Expandable.Example';

const WeeklyDayPickerInlineExampleCode = require('!raw-loader!@uifabric/date-time/src/components/WeeklyDayPicker/examples/WeeklyDayPicker.Inline.Example.tsx') as string;
const WeeklyDayPickerInlineExampleCodepen = require('!@uifabric/codepen-loader!@uifabric/date-time/src/components/WeeklyDayPicker/examples/WeeklyDayPicker.Inline.Example.tsx') as string;

export class WeeklyDayPickerPage extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="WeeklyDayPicker"
        componentName="WeeklyDayPicker"
        exampleCards={
          <div>
            <ExampleCard
              title="Inline WeeklyDayPicker"
              code={WeeklyDayPickerInlineExampleCode}
              codepenJS={WeeklyDayPickerInlineExampleCodepen}
            >
              <WeeklyDayPickerInlineExample />
            </ExampleCard>
            <ExampleCard
              title="Inline WeeklyDayPicker with externally controlled date"
              code={WeeklyDayPickerInlineExampleCode}
              codepenJS={WeeklyDayPickerInlineExampleCodepen}
            >
              <WeeklyDayPickerInlineExample showNavigateButtons={true} />
            </ExampleCard>
            <ExampleCard
              title="Inline WeeklyDayPicker with externally controlled date"
              code={WeeklyDayPickerInlineExampleCode}
              codepenJS={WeeklyDayPickerInlineExampleCodepen}
            >
              <WeeklyDayPickerInlineExpandableExample showExpandButton={true} />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={[require<string>('!raw-loader!@uifabric/date-time/src/components/WeeklyDayPicker/WeeklyDayPicker.types.ts')]}
          />
        }
      />
    );
  }
}
