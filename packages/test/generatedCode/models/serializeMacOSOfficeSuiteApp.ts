import {MacOSOfficeSuiteApp} from './index';
import {serializeMobileApp} from './serializeMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSOfficeSuiteApp(writer: SerializationWriter, macOSOfficeSuiteApp: MacOSOfficeSuiteApp | undefined = {}) : void {
        serializeMobileApp(writer, macOSOfficeSuiteApp)
}
