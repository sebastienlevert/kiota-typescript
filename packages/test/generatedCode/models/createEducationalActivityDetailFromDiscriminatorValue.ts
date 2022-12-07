import {EducationalActivityDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationalActivityDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationalActivityDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationalActivityDetail();
}
