import {SkillProficiency} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSkillProficiencyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SkillProficiency {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SkillProficiency();
}
