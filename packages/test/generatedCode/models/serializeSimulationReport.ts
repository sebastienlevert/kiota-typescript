import {SimulationReport} from './index';
import {serializeSimulationReportOverview} from './serializeSimulationReportOverview';
import {serializeUserSimulationDetails} from './serializeUserSimulationDetails';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSimulationReport(writer: SerializationWriter, simulationReport: SimulationReport | undefined = {}) : void {
            writer.writeStringValue("@odata.type", simulationReport.odataType);
            writer.writeObjectValueFromMethod("overview", simulationReport.overview as any, serializeSimulationReportOverview);
            writer.writeCollectionOfObjectValuesFromMethod("simulationUsers", simulationReport.simulationUsers as any, serializeUserSimulationDetails);
}
