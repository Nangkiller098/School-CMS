import React from "react";
import useFetchTeams from "../../hooks/useFetchTeams";
import TeamCardHome from "./TeamsCardHome";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";

const ManagementTeams = () => {
  const { teamMembers, loading, error } = useFetchTeams();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen font-bold font-mono text-red-600">
        No Teams Member found
      </div>
    );
  }

  // Determine the team members to display
  const displayedTeamMembers =
    teamMembers && teamMembers.length > 4
      ? teamMembers.slice(0, 3)
      : teamMembers;

  return (
    <div>
      {" "}
      <div className="flex items-center mb-5">
        <div className="flex-grow  border-t-[6px] ml-8 border-black"></div>
        <h2 className="text-4xl font-bold mx-8">MANAGEMENT TEAMS</h2>
        <div className="flex-grow border-t-[6px] mr-8 border-black"></div>
      </div>
      <div className="bg-green-50 py-16">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
            {displayedTeamMembers.map((member) => (
              <div
                key={member.id}
                className="team-card transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <TeamCardHome member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to="/managementteams">
          <button className="bg-green-400 rounded-lg w-32 h-10 mb-5 relative overflow-hidden group">
            <span className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative z-10 text-white">Read More</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ManagementTeams;
