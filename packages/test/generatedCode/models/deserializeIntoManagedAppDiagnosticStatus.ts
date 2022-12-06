import {ManagedAppDiagnosticStatus} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppDiagnosticStatus(managedAppDiagnosticStatus: ManagedAppDiagnosticStatus | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "mitigationInstruction": n => { managedAppDiagnosticStatus.mitigationInstruction = n.getStringValue() as any ; },
        "@odata.type": n => { managedAppDiagnosticStatus.odataType = n.getStringValue() as any ; },
        "state": n => { managedAppDiagnosticStatus.state = n.getStringValue() as any ; },
        "validationName": n => { managedAppDiagnosticStatus.validationName = n.getStringValue() as any ; },
    }
}
