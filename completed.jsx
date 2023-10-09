import React, { useEffect } from "react";
import { getProjectsAndIssues } from "../storageUtils";
import { useProjectContext } from "../ProjectContext";
import "./completed.css";

export default function Completed() {
  const {
    projects,
    setProjects,
    customIssue,
    editedIssue,
    setEditedIssue,
    editingIssueId,
    isDragging,
    isHighlighted,
    handleEditIssue,
    handleCreateCard,
    handleDeleteCard,
    handleDeleteProjectStatusCard,
    handleDragOver,
    handleDragStart,
    handleDrop,
    handleSaveIssue,
    getPriorityBadgeClass,
    getPriorityColor,
  } = useProjectContext();

  useEffect(() => {
    // Load projects and issues from localStorage when the component mounts
    const storedProjects = getProjectsAndIssues();
    if (storedProjects.length === 0) {
      setProjects(projectsData);
    } else {
      setProjects(storedProjects);
    }
  }, []);

  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  );

  return (
    <div className="col-lg-4 mb-3 mb-lg-0">
      <div className="txt-lft">
        {completedProjects.map((project, index) => (
          <div key={index}>
            <h5 className="completedtask-count">
              {project?.status} : {project?.issues.length}
            </h5>
          </div>
        ))}
      </div>
      <div className="kanban-board">
        {completedProjects.map((project, index) => (
          <div
            key={project?.id}
            className={`kanban-column card p-3 ${
              isHighlighted ? "highlighted" : ""
            }`}
          >
            {project?.issues.map((issue, issueIndex) => (
              <div
                key={issue.id}
                draggable
                index={issueIndex}
                onDragStart={(e) =>
                  handleDragStart(e, project.id, issue.id, issue.status)
                }
                onDrop={(e) => handleDrop(e, project.id)}
                onDragOver={(e) => handleDragOver(e)}
                className={`kanban-card ${isDragging ? "dragged" : ""}`}
              >
                <div
                  className="kanban-card"
                  style={{
                    backgroundColor: getPriorityColor(issue.status),
                  }}
                >
                  {editingIssueId === issue.id ? (
                    // Render input fields in edit mode
                    <div>
                      <input
                        type="text"
                        value={editedIssue.title}
                        onChange={(e) =>
                          setEditedIssue((prev) => ({
                            ...prev,
                            title: e.target.value,
                          }))
                        }
                      />
                      <input
                        type="text"
                        value={editedIssue.assignee}
                        onChange={(e) =>
                          setEditedIssue((prev) => ({
                            ...prev,
                            assignee: e.target.value,
                          }))
                        }
                      />
                      <input
                        type="text"
                        value={editedIssue.priority}
                        onChange={(e) =>
                          setEditedIssue((prev) => ({
                            ...prev,
                            priority: e.target.value,
                          }))
                        }
                      />
                      <input
                        type="text"
                        value={editedIssue.comments}
                        onChange={(e) =>
                          setEditedIssue((prev) => ({
                            ...prev,
                            comments: e.target.value,
                          }))
                        }
                      />
                      <input
                        type="text"
                        value={editedIssue.duedate}
                        onChange={(e) =>
                          setEditedIssue((prev) => ({
                            ...prev,
                            duedate: e.target.value,
                          }))
                        }
                      />
                      {/* Add more input fields for other issue details if needed */}
                      <a
                        className="btn btn-primary"
                        onClick={() => handleSaveIssue(issue.id)}
                      >
                        <i className="fa fa-save"></i>
                      </a>
                    </div>
                  ) : (
                    // Render issue details in view mode
                    <div className="text-start">
                      <h5>Issue: {issue?.title}</h5>
                      <h5>Assignee: {issue?.assignee}</h5>
                      <h5>Comments: {issue?.comments}</h5>
                      <h6>Due date: {issue?.duedate}</h6>
                      <span
                        className={`badge ${getPriorityBadgeClass(
                          issue?.priority
                        )}`}
                      >
                        Priority: {issue?.priority}
                      </span>
                      {/* Add more issue details if needed */}
                      <div className="text-end">
                        <a
                          className="btn btn-outline-danger mr-2"
                          onClick={() => handleDeleteCard(project.id, issue.id)}
                        >
                          <i className="fa fa-trash"></i>
                        </a>
                        <a
                          className="btn btn-secondary m-2"
                          onClick={() => handleEditIssue(issue.id, project.id)}
                        >
                          <i className="fa fa-pencil"></i>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {/* Rest of the project column content */}
            <div className="btn-wrap">
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteProjectStatusCard(project?.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-success my-2"
                onClick={() =>
                  handleCreateCard(
                    project?.id,
                    customIssue.title,
                    customIssue.assignee,
                    customIssue.description,
                    customIssue.priority,
                    customIssue.duedate
                  )
                }
              >
                Create
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
