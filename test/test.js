const preProcessingModule = require('../preProcessingModule')
const testModule = require('../testModule')
const expect = require('chai').expect

describe('`TestCases', () => {
  const xml = {
    bpmn:
      '<?xml version="1.0" encoding="UTF-8"?>\n<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:signavio="http://www.signavio.com" id="Definitions_1" name="BPM17_Running_Example" targetNamespace="http://bpmn.io/schema/bpmn" expressionLanguage="http://www.w3.org/TR/XPath" exporter="Signavio Process Editor, http://www.signavio.com" exporterVersion="13.7.1" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd">\n  <process id="BPM17_Running_Example" name="BPM17_Running_Example" processType="None" isClosed="false" isExecutable="false">\n    <extensionElements>\n      <signavio:signavioDiagramMetaData metaKey="meta-issue" metaValue="" />\n      <signavio:signavioDiagramMetaData metaKey="meta-versiondetails" metaValue="" />\n      <signavio:signavioDiagramMetaData metaKey="meta-diagramlink" metaValue="" />\n      <signavio:signavioDiagramMetaData metaKey="meta-functionalrequirement" metaValue="" />\n      <signavio:signavioDiagramMetaData metaKey="meta-reviewedby" metaValue="Reviewer" />\n      <signavio:signavioDiagramMetaData metaKey="meta-kpi" metaValue="" />\n      <signavio:signavioDiagramMetaData metaKey="meta-testvalues" metaValue="{&#34;totalCount&#34;:2,&#34;items&#34;:[{&#34;outputs&#34;:[&#34;applicantEligible = false&#34;],&#34;inputs&#34;:[&#34;userID = 5&#34;]},{&#34;outputs&#34;:[&#34;applicantEligible = true&#34;],&#34;inputs&#34;:[&#34;userID = 15&#34;]}]}" />\n      <signavio:signavioDiagramMetaData metaKey="meta-glossary" metaValue="" />\n      <signavio:signavioDiagramMetaData metaKey="meta-owner" metaValue="" />\n      <signavio:signavioDiagramMetaData metaKey="meta-path" metaValue="" />\n      <signavio:signavioDiagramMetaData metaKey="meta-processid" metaValue="" />\n      <signavio:signavioDiagramMetaData metaKey="meta-story" metaValue="" />\n      <signavio:signavioDiagramMetaData metaKey="prozessreifegrad" metaValue="" />\n      <signavio:signavioDiagramMetaData metaKey="iso9000ff" metaValue="" />\n      <signavio:signavioDiagramMetaData metaKey="meta-externaldocuments" metaValue="" />\n      <signavio:signavioDiagramMetaData metaKey="processgoal" metaValue="" />\n      <signavio:signavioDiagramMetaData metaKey="meta-apqcreference22" metaValue="" />\n      <signavio:signavioDiagramMetaData metaKey="meta-processowner" metaValue="" />\n      <signavio:signavioDiagramMetaData metaKey="meta-writtenby" metaValue="Author" />\n      <signavio:signavioDiagramMetaData metaKey="revisionid" metaValue="4c740b9961d040178428ee621f35e9b6" />\n    </extensionElements>\n    <startEvent id="StartEvent_1" name="">\n      <extensionElements>\n        <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff" />\n        <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />\n        <signavio:signavioMetaData metaKey="vorgngerprozesse" metaValue="[]" />\n        <signavio:signavioLabel align="left" ref="text_name" x="-30.0" y="33.0" />\n      </extensionElements>\n      <outgoing>SequenceFlow_16ew9vc</outgoing>\n    </startEvent>\n    <userTask id="Task_06xlgcp" name="Enter userID" implementation="##unspecified">\n      <documentation id="sid-da4eedb5-225d-4e18-a1ea-89f19db6d56b"><![CDATA[(uint _userID) : (uint userID) -> {userID = _userID; }]]></documentation>\n      <extensionElements>\n        <signavio:signavioMetaData metaKey="bgcolor" metaValue="#FFFFFF" />\n        <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />\n        <signavio:signavioMetaData metaKey="meta-issue" metaValue="" />\n        <signavio:signavioMetaData metaKey="meta-space" metaValue="&#10;" />\n        <signavio:signavioMetaData metaKey="meta-line" metaValue="-----------------------------------------------------------------------------------------------------------" />\n        <signavio:signavioMetaData metaKey="erteiltfreigabe" metaValue="" />\n        <signavio:signavioMetaData metaKey="wirdkonsultiert" metaValue="[]" />\n        <signavio:signavioMetaData metaKey="externaldocuments" metaValue="[]" />\n        <signavio:signavioMetaData metaKey="meta-accountable" metaValue="[]" />\n        <signavio:signavioMetaData metaKey="meta-story" metaValue="" />\n        <signavio:signavioMetaData metaKey="meta-consulted" metaValue="[]" />\n        <signavio:signavioMetaData metaKey="meta-informed" metaValue="[]" />\n        <signavio:signavioMetaData metaKey="meta-risks" metaValue="" />\n        <signavio:signavioMetaData metaKey="meta-information2" metaValue="" />\n        <signavio:signavioMetaData metaKey="meta-relateddoc" metaValue="[]" />\n        <signavio:signavioMetaData metaKey="meta-tcode" metaValue="[]" />\n        <signavio:signavioMetaData metaKey="meta-image" metaValue="" />\n        <signavio:signavioMetaData metaKey="wirdinformiert" metaValue="[]" />\n      </extensionElements>\n      <incoming>SequenceFlow_16ew9vc</incoming>\n      <outgoing>sid-ABC11D1A-273B-4A2E-80B8-A1577A984FD9</outgoing>\n    </userTask>\n    <scriptTask id="Task_1ggq6sf" name="Check userID" scriptFormat="">\n      <extensionElements>\n        <signavio:signavioMetaData metaKey="bgcolor" metaValue="#FFFFFF" />\n        <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />\n        <signavio:signavioMetaData metaKey="meta-issue" metaValue="" />\n        <signavio:signavioMetaData metaKey="meta-space" metaValue="&#10;" />\n        <signavio:signavioMetaData metaKey="meta-line" metaValue="-----------------------------------------------------------------------------------------------------------" />\n        <signavio:signavioMetaData metaKey="erteiltfreigabe" metaValue="" />\n        <signavio:signavioMetaData metaKey="wirdkonsultiert" metaValue="[]" />\n        <signavio:signavioMetaData metaKey="externaldocuments" metaValue="[]" />\n        <signavio:signavioMetaData metaKey="meta-accountable" metaValue="[]" />\n        <signavio:signavioMetaData metaKey="meta-story" metaValue="" />\n        <signavio:signavioMetaData metaKey="meta-consulted" metaValue="[]" />\n        <signavio:signavioMetaData metaKey="meta-informed" metaValue="[]" />\n        <signavio:signavioMetaData metaKey="meta-risks" metaValue="" />\n        <signavio:signavioMetaData metaKey="meta-information2" metaValue="" />\n        <signavio:signavioMetaData metaKey="meta-relateddoc" metaValue="[]" />\n        <signavio:signavioMetaData metaKey="meta-tcode" metaValue="[]" />\n        <signavio:signavioMetaData metaKey="meta-image" metaValue="" />\n        <signavio:signavioMetaData metaKey="wirdinformiert" metaValue="[]" />\n      </extensionElements>\n      <incoming>sid-ABC11D1A-273B-4A2E-80B8-A1577A984FD9</incoming>\n      <outgoing>SequenceFlow_0ensspb</outgoing>\n      <script><![CDATA[if (userID >= 10) \n\tapplicantEligible = true;\nelse \n\tapplicantEligible = false;]]></script>\n    </scriptTask>\n    <exclusiveGateway id="ExclusiveGateway_06dboho" name="" gatewayDirection="Diverging" default="SequenceFlow_0vbi21y">\n      <extensionElements>\n        <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff" />\n        <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />\n        <signavio:signavioLabel ref="text_name" x="-25.0" y="45.0" />\n      </extensionElements>\n      <incoming>SequenceFlow_0ensspb</incoming>\n      <outgoing>SequenceFlow_069rxq2</outgoing>\n      <outgoing>SequenceFlow_0vbi21y</outgoing>\n    </exclusiveGateway>\n    <endEvent id="EndEvent_19xiayo" name="Loan app accepted">\n      <extensionElements>\n        <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff" />\n        <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />\n        <signavio:signavioMetaData metaKey="nachfolgerprozesse" metaValue="[]" />\n        <signavio:signavioLabel align="left" ref="text_name" x="-30.0" y="33.0" />\n      </extensionElements>\n      <incoming>SequenceFlow_0jigqn5</incoming>\n      <messageEventDefinition id="sid-a9c7752c-0337-4e22-90ec-a2929879899a" />\n    </endEvent>\n    <endEvent id="EndEvent_1ubxmre" name="Loan app rejected">\n      <extensionElements>\n        <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff" />\n        <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />\n        <signavio:signavioMetaData metaKey="nachfolgerprozesse" metaValue="[]" />\n        <signavio:signavioLabel align="left" ref="text_name" x="-30.0" y="33.0" />\n      </extensionElements>\n      <incoming>SequenceFlow_0vbi21y</incoming>\n      <incoming>SequenceFlow_04nl5rk</incoming>\n      <messageEventDefinition id="sid-ee10bd4c-b7a6-4164-95d1-75ff0f4af8c7" />\n    </endEvent>\n    <userTask id="Task_15lfaes" name="Confirm Acceptance" implementation="##unspecified">\n      <documentation id="sid-c5fae524-d391-46de-b355-84be6a4aaab8"><![CDATA[(bool _confirmation) : (bool applicantEligible) -> {applicantEligible = _confirmation; }]]></documentation>\n      <extensionElements>\n        <signavio:signavioMetaData metaKey="bgcolor" metaValue="#FFFFFF" />\n        <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />\n        <signavio:signavioMetaData metaKey="meta-issue" metaValue="" />\n        <signavio:signavioMetaData metaKey="meta-space" metaValue="&#10;" />\n        <signavio:signavioMetaData metaKey="meta-line" metaValue="-----------------------------------------------------------------------------------------------------------" />\n        <signavio:signavioMetaData metaKey="erteiltfreigabe" metaValue="" />\n        <signavio:signavioMetaData metaKey="wirdkonsultiert" metaValue="[]" />\n        <signavio:signavioMetaData metaKey="externaldocuments" metaValue="[]" />\n        <signavio:signavioMetaData metaKey="meta-accountable" metaValue="[]" />\n        <signavio:signavioMetaData metaKey="meta-story" metaValue="" />\n        <signavio:signavioMetaData metaKey="meta-consulted" metaValue="[]" />\n        <signavio:signavioMetaData metaKey="meta-informed" metaValue="[]" />\n        <signavio:signavioMetaData metaKey="meta-risks" metaValue="" />\n        <signavio:signavioMetaData metaKey="meta-information2" metaValue="" />\n        <signavio:signavioMetaData metaKey="meta-relateddoc" metaValue="[]" />\n        <signavio:signavioMetaData metaKey="meta-tcode" metaValue="[]" />\n        <signavio:signavioMetaData metaKey="meta-image" metaValue="" />\n        <signavio:signavioMetaData metaKey="wirdinformiert" metaValue="[]" />\n      </extensionElements>\n      <incoming>SequenceFlow_14exagm</incoming>\n      <outgoing>SequenceFlow_1pxsdl6</outgoing>\n    </userTask>\n    <exclusiveGateway id="ExclusiveGateway_0ga7p17" name="" gatewayDirection="Diverging" default="SequenceFlow_04nl5rk">\n      <extensionElements>\n        <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff" />\n        <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />\n        <signavio:signavioLabel ref="text_name" x="-25.0" y="45.0" />\n      </extensionElements>\n      <incoming>SequenceFlow_1pxsdl6</incoming>\n      <outgoing>SequenceFlow_0jigqn5</outgoing>\n      <outgoing>SequenceFlow_04nl5rk</outgoing>\n    </exclusiveGateway>\n    <intermediateThrowEvent id="IntermediateThrowEvent_0k5vl3c" name="Confirmation request sent">\n      <extensionElements>\n        <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff" />\n        <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />\n        <signavio:signavioLabel ref="text_name" valign="middle" x="-18.0" y="-21.0" />\n      </extensionElements>\n      <incoming>SequenceFlow_069rxq2</incoming>\n      <outgoing>SequenceFlow_14exagm</outgoing>\n      <messageEventDefinition id="sid-66502cfd-2ee0-4255-979b-5c8235b1e9f3" />\n    </intermediateThrowEvent>\n    <sequenceFlow id="SequenceFlow_16ew9vc" name="" isImmediate="true" sourceRef="StartEvent_1" targetRef="Task_06xlgcp">\n      <extensionElements>\n        <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />\n        <signavio:signavioLabel align="left" ref="text_name" valign="top" x="215.4832356975972" y="221.0" />\n      </extensionElements>\n      <conditionExpression xsi:type="tFormalExpression" id="sid-9819c360-c0ac-46a9-94b1-20edf45920f4" language="">None</conditionExpression>\n    </sequenceFlow>\n    <sequenceFlow id="SequenceFlow_0ensspb" name="" isImmediate="true" sourceRef="Task_1ggq6sf" targetRef="ExclusiveGateway_06dboho">\n      <extensionElements>\n        <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />\n        <signavio:signavioLabel align="left" ref="text_name" valign="top" x="657.0" y="221.0" />\n      </extensionElements>\n      <conditionExpression xsi:type="tFormalExpression" id="sid-dfdc07cb-d6a5-49ab-9ce1-e439e7467f21" language="">None</conditionExpression>\n    </sequenceFlow>\n    <sequenceFlow id="SequenceFlow_069rxq2" name="" isImmediate="true" sourceRef="ExclusiveGateway_06dboho" targetRef="IntermediateThrowEvent_0k5vl3c">\n      <extensionElements>\n        <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />\n        <signavio:signavioLabel align="left" ref="text_name" valign="top" x="716.0" y="185.5" />\n      </extensionElements>\n      <conditionExpression xsi:type="tFormalExpression" id="sid-f87e2211-7989-4fde-8803-5e7bc2214cc2" language="">applicantEligible</conditionExpression>\n    </sequenceFlow>\n    <sequenceFlow id="SequenceFlow_0vbi21y" name="" isImmediate="true" sourceRef="ExclusiveGateway_06dboho" targetRef="EndEvent_1ubxmre">\n      <extensionElements>\n        <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />\n        <signavio:signavioLabel align="left" ref="text_name" valign="top" x="716.0" y="281.5" />\n      </extensionElements>\n    </sequenceFlow>\n    <sequenceFlow id="SequenceFlow_1pxsdl6" name="" isImmediate="true" sourceRef="Task_15lfaes" targetRef="ExclusiveGateway_0ga7p17">\n      <extensionElements>\n        <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />\n        <signavio:signavioLabel align="left" ref="text_name" valign="top" x="903.5" y="145.0" />\n      </extensionElements>\n      <conditionExpression xsi:type="tFormalExpression" id="sid-dd6d4b07-662d-4d87-9969-d6b57c2b0a73" language="">None</conditionExpression>\n    </sequenceFlow>\n    <sequenceFlow id="SequenceFlow_0jigqn5" name="" isImmediate="true" sourceRef="ExclusiveGateway_0ga7p17" targetRef="EndEvent_19xiayo">\n      <extensionElements>\n        <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />\n        <signavio:signavioLabel align="left" ref="text_name" valign="top" x="983.5" y="145.0" />\n      </extensionElements>\n      <conditionExpression xsi:type="tFormalExpression" id="sid-79ab16b2-b301-4a06-8b44-739ad0b0a33e" language="">applicantEligible</conditionExpression>\n    </sequenceFlow>\n    <sequenceFlow id="SequenceFlow_04nl5rk" name="" isImmediate="true" sourceRef="ExclusiveGateway_0ga7p17" targetRef="EndEvent_1ubxmre">\n      <extensionElements>\n        <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />\n        <signavio:signavioLabel align="left" ref="text_name" valign="top" x="956.0" y="239.0" />\n      </extensionElements>\n    </sequenceFlow>\n    <sequenceFlow id="SequenceFlow_14exagm" name="" isImmediate="true" sourceRef="IntermediateThrowEvent_0k5vl3c" targetRef="Task_15lfaes">\n      <extensionElements>\n        <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />\n        <signavio:signavioLabel align="left" ref="text_name" valign="top" x="778.0" y="145.0" />\n      </extensionElements>\n      <conditionExpression xsi:type="tFormalExpression" id="sid-923dd290-2c59-4751-b257-6052afb56652" language="">None</conditionExpression>\n    </sequenceFlow>\n    <sequenceFlow id="sid-ABC11D1A-273B-4A2E-80B8-A1577A984FD9" name="" isImmediate="true" sourceRef="Task_06xlgcp" targetRef="Task_1ggq6sf">\n      <extensionElements>\n        <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />\n      </extensionElements>\n      <conditionExpression xsi:type="tFormalExpression" id="sid-8ed5ca00-095d-4edc-824a-6e8ffad51a27" language="">None</conditionExpression>\n    </sequenceFlow>\n  </process>\n  <bpmndi:BPMNDiagram id="sid-f454b968-03e4-435a-b200-c8e5d212cf4e" name="BPM17_Running_Example">\n    <bpmndi:BPMNPlane id="sid-9bd4e8c5-2450-493b-8317-8342af1f0f22" bpmnElement="BPM17_Running_Example">\n      <bpmndi:BPMNShape id="StartEvent_1_gui" bpmnElement="StartEvent_1">\n        <omgdc:Bounds x="329" y="221" width="30" height="30" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="Task_06xlgcp_gui" bpmnElement="Task_06xlgcp">\n        <omgdc:Bounds x="421" y="196" width="100" height="80" />\n        <bpmndi:BPMNLabel labelStyle="sid-7f1337aa-d9bb-4878-ba0f-d6366d0f99a4">\n          <omgdc:Bounds x="436.2857131958008" y="228" width="69.42857360839844" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="Task_1ggq6sf_gui" bpmnElement="Task_1ggq6sf">\n        <omgdc:Bounds x="583" y="196" width="100" height="80" />\n        <bpmndi:BPMNLabel labelStyle="sid-7f1337aa-d9bb-4878-ba0f-d6366d0f99a4">\n          <omgdc:Bounds x="596.7428588867188" y="228" width="72.5142822265625" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="ExclusiveGateway_06dboho_gui" bpmnElement="ExclusiveGateway_06dboho" isMarkerVisible="true">\n        <omgdc:Bounds x="726" y="216" width="40" height="40" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="EndEvent_19xiayo_gui" bpmnElement="EndEvent_19xiayo">\n        <omgdc:Bounds x="1047" y="143" width="30" height="30" />\n        <bpmndi:BPMNLabel labelStyle="sid-ab83809c-f2dc-4e56-afb1-068054cb8329">\n          <omgdc:Bounds x="1017" y="176" width="93.34285736083984" height="11" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="EndEvent_1ubxmre_gui" bpmnElement="EndEvent_1ubxmre">\n        <omgdc:Bounds x="969" y="285" width="30" height="30" />\n        <bpmndi:BPMNLabel labelStyle="sid-ab83809c-f2dc-4e56-afb1-068054cb8329">\n          <omgdc:Bounds x="939" y="318" width="89.80714416503906" height="11" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="Task_15lfaes_gui" bpmnElement="Task_15lfaes">\n        <omgdc:Bounds x="836" y="120" width="100" height="80" />\n        <bpmndi:BPMNLabel labelStyle="sid-7f1337aa-d9bb-4878-ba0f-d6366d0f99a4">\n          <omgdc:Bounds x="855.5285720825195" y="146" width="60.94285583496094" height="24" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="ExclusiveGateway_0ga7p17_gui" bpmnElement="ExclusiveGateway_0ga7p17" isMarkerVisible="true">\n        <omgdc:Bounds x="966" y="140" width="40" height="40" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="IntermediateThrowEvent_0k5vl3c_gui" bpmnElement="IntermediateThrowEvent_0k5vl3c">\n        <omgdc:Bounds x="777" y="145" width="30" height="30" />\n        <bpmndi:BPMNLabel labelStyle="sid-ab83809c-f2dc-4e56-afb1-068054cb8329">\n          <omgdc:Bounds x="693.5892868041992" y="117" width="130.82142639160156" height="11" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id="SequenceFlow_16ew9vc_gui" bpmnElement="SequenceFlow_16ew9vc">\n        <omgdi:waypoint xsi:type="omgdc:Point" x="359" y="236" />\n        <omgdi:waypoint xsi:type="omgdc:Point" x="421" y="236" />\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id="SequenceFlow_0ensspb_gui" bpmnElement="SequenceFlow_0ensspb">\n        <omgdi:waypoint xsi:type="omgdc:Point" x="683" y="236" />\n        <omgdi:waypoint xsi:type="omgdc:Point" x="726" y="236" />\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id="SequenceFlow_069rxq2_gui" bpmnElement="SequenceFlow_069rxq2">\n        <omgdi:waypoint xsi:type="omgdc:Point" x="746" y="216" />\n        <omgdi:waypoint xsi:type="omgdc:Point" x="746" y="160" />\n        <omgdi:waypoint xsi:type="omgdc:Point" x="777" y="160" />\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id="SequenceFlow_0vbi21y_gui" bpmnElement="SequenceFlow_0vbi21y">\n        <omgdi:waypoint xsi:type="omgdc:Point" x="746" y="256" />\n        <omgdi:waypoint xsi:type="omgdc:Point" x="746" y="302" />\n        <omgdi:waypoint xsi:type="omgdc:Point" x="969" y="300.12605042016804" />\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id="SequenceFlow_1pxsdl6_gui" bpmnElement="SequenceFlow_1pxsdl6">\n        <omgdi:waypoint xsi:type="omgdc:Point" x="936" y="160" />\n        <omgdi:waypoint xsi:type="omgdc:Point" x="966" y="160" />\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id="SequenceFlow_0jigqn5_gui" bpmnElement="SequenceFlow_0jigqn5">\n        <omgdi:waypoint xsi:type="omgdc:Point" x="1006" y="159.47368421052633" />\n        <omgdi:waypoint xsi:type="omgdc:Point" x="1047" y="158.39473684210526" />\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id="SequenceFlow_04nl5rk_gui" bpmnElement="SequenceFlow_04nl5rk">\n        <omgdi:waypoint xsi:type="omgdc:Point" x="986" y="180" />\n        <omgdi:waypoint xsi:type="omgdc:Point" x="986" y="239" />\n        <omgdi:waypoint xsi:type="omgdc:Point" x="986" y="239" />\n        <omgdi:waypoint xsi:type="omgdc:Point" x="984.4918032786885" y="285" />\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id="SequenceFlow_14exagm_gui" bpmnElement="SequenceFlow_14exagm">\n        <omgdi:waypoint xsi:type="omgdc:Point" x="807" y="160" />\n        <omgdi:waypoint xsi:type="omgdc:Point" x="836" y="160" />\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id="sid-ABC11D1A-273B-4A2E-80B8-A1577A984FD9_gui" bpmnElement="sid-ABC11D1A-273B-4A2E-80B8-A1577A984FD9">\n        <omgdi:waypoint xsi:type="omgdc:Point" x="521" y="236" />\n        <omgdi:waypoint xsi:type="omgdc:Point" x="583" y="236" />\n      </bpmndi:BPMNEdge>\n    </bpmndi:BPMNPlane>\n    <bpmndi:BPMNLabelStyle id="sid-ab83809c-f2dc-4e56-afb1-068054cb8329">\n      <omgdc:Font name="Arial" size="11" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" />\n    </bpmndi:BPMNLabelStyle>\n    <bpmndi:BPMNLabelStyle id="sid-7f1337aa-d9bb-4878-ba0f-d6366d0f99a4">\n      <omgdc:Font name="Arial" size="12" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" />\n    </bpmndi:BPMNLabelStyle>\n  </bpmndi:BPMNDiagram>\n</definitions>\n',
    name: 'BPM17_Running_Example',
  }

  describe('preProcessingModule', () => {
    it('Should fetch the correct test values', () => {
      const actualTestKeys = Object.keys(
        preProcessingModule.fetchTestValue(xml.bpmn)[0]
      )
      const expectedTestKeys = ['outputs', 'inputs']
      for (const key in actualTestKeys) {
        expect(actualTestKeys[key]).equals(expectedTestKeys[key])
      }
    })
  })

  describe('testModule', () => {
    it('Should return the correct successFlag after testing the BPMN 2.0 XML', () => {
      expect(testModule.testModule(xml.bpmn)).equals(true)
    })
  })
})
