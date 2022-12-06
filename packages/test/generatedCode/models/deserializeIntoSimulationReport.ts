import {deserializeIntoSimulationReportOverview} from './deserializeIntoSimulationReportOverview';
import {deserializeIntoUserSimulationDetails} from './deserializeIntoUserSimulationDetails';
import {SimulationReport} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationReport(simulationReport: SimulationReport | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { simulationReport.odataType = n.getStringValue() as any ; },
        "overview": n => { simulationReport.overview = n.getObject(deserializeIntoSimulationReportOverview) as any ; },
        "simulationUsers": n => { simulationReport.simulationUsers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserSimulationDetails) as any ; },
    }
}
