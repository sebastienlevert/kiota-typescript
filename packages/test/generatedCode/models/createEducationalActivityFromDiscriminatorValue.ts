import {EducationalActivity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationalActivityFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationalActivity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationalActivity();
}
