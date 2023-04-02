// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DigitalTranscript {
    struct Transcript {
        uint256 id;
        address student;
        string name;
        string[] courses;
        uint256[] grades;
        string issuedBy;
        uint256 issuedOn;
    }

    Transcript[] private transcripts;
    address private owner;

    event TranscriptAdded(uint256 indexed id, address indexed student);

    constructor() {
        owner = msg.sender;
    }

    function addTranscript(string memory _name, string[] memory _courses, uint256[] memory _grades, string memory _issuedBy, uint256 _issuedOn) public {
        require(msg.sender == owner, "Only the contract owner can add a transcript.");
        require(_courses.length == _grades.length, "The number of courses must match the number of grades.");

        uint256 id = transcripts.length;
        Transcript memory newTranscript = Transcript(id, msg.sender, _name, _courses, _grades, _issuedBy, _issuedOn);
        transcripts.push(newTranscript);

        emit TranscriptAdded(id, msg.sender);
    }

    function getTranscript(uint256 _id) public view returns (string memory, string[] memory, uint256[] memory, string memory, uint256) {
        require(_id < transcripts.length, "Transcript with the given ID does not exist.");

        Transcript memory transcript = transcripts[_id];
        require(msg.sender == owner || msg.sender == transcript.student, "Only the contract owner or the student can view the transcript.");

        return (transcript.name, transcript.courses, transcript.grades, transcript.issuedBy, transcript.issuedOn);
    }
}
