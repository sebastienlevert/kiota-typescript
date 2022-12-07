import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoLocaleInfo} from './deserializeIntoLocaleInfo';
import {deserializeIntoRegionalFormatOverrides} from './deserializeIntoRegionalFormatOverrides';
import {deserializeIntoTranslationPreferences} from './deserializeIntoTranslationPreferences';
import {RegionalAndLanguageSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRegionalAndLanguageSettings(regionalAndLanguageSettings: RegionalAndLanguageSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(regionalAndLanguageSettings),
        "authoringLanguages": n => { regionalAndLanguageSettings.authoringLanguages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLocaleInfo) as any ; },
        "defaultDisplayLanguage": n => { regionalAndLanguageSettings.defaultDisplayLanguage = n.getObject(deserializeIntoLocaleInfo) as any ; },
        "defaultRegionalFormat": n => { regionalAndLanguageSettings.defaultRegionalFormat = n.getObject(deserializeIntoLocaleInfo) as any ; },
        "defaultSpeechInputLanguage": n => { regionalAndLanguageSettings.defaultSpeechInputLanguage = n.getObject(deserializeIntoLocaleInfo) as any ; },
        "defaultTranslationLanguage": n => { regionalAndLanguageSettings.defaultTranslationLanguage = n.getObject(deserializeIntoLocaleInfo) as any ; },
        "regionalFormatOverrides": n => { regionalAndLanguageSettings.regionalFormatOverrides = n.getObject(deserializeIntoRegionalFormatOverrides) as any ; },
        "translationPreferences": n => { regionalAndLanguageSettings.translationPreferences = n.getObject(deserializeIntoTranslationPreferences) as any ; },
    }
}
