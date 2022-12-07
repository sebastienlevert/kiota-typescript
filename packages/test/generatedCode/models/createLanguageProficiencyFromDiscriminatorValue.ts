import {LanguageProficiency} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLanguageProficiencyFromDiscriminatorValue(parseNode: ParseNode | undefined) : LanguageProficiency {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LanguageProficiency();
}
