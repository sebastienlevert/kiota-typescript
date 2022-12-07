import {RegionalAndLanguageSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRegionalAndLanguageSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : RegionalAndLanguageSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RegionalAndLanguageSettings();
}
