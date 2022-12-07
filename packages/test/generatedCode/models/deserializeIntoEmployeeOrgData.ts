import {EmployeeOrgData} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEmployeeOrgData(employeeOrgData: EmployeeOrgData | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "costCenter": n => { employeeOrgData.costCenter = n.getStringValue() as any ; },
        "division": n => { employeeOrgData.division = n.getStringValue() as any ; },
    }
}
