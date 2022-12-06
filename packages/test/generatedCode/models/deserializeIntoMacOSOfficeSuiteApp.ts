import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import {MacOSOfficeSuiteApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSOfficeSuiteApp(macOSOfficeSuiteApp: MacOSOfficeSuiteApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(macOSOfficeSuiteApp),
    }
}
