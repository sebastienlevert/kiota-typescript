import {InstitutionData} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInstitutionDataFromDiscriminatorValue(parseNode: ParseNode | undefined) : InstitutionData {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InstitutionData();
}
