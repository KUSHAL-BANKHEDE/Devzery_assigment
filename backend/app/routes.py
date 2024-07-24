from flask import Blueprint, request, jsonify
from app import db
from app.models import TestCase

bp = Blueprint('api', __name__, url_prefix='/api')

@bp.route('/', methods=['GET'])
def index():
    return 'Welcome to the Flask API!'


@bp.route('/testcases', methods=['GET'])
def get_testcases():
    testcases = TestCase.query.all()
    return jsonify([tc.to_dict() for tc in testcases])

@bp.route('/testcases', methods=['POST'])
def add_testcase():
    data = request.get_json()
    testcase = TestCase(
        name=data['name'],
        estimate_time=data['estimate_time'],
        module=data['module'],
        priority=data['priority'],
        status=data['status']
    )
    db.session.add(testcase)
    db.session.commit()
    return jsonify(testcase.to_dict()), 201

@bp.route('/testcases/<int:id>', methods=['PUT'])
def update_testcase(id):
    data = request.get_json()
    testcase = TestCase.query.get_or_404(id)
    testcase.name = data['name']
    testcase.estimate_time = data['estimate_time']
    testcase.module = data['module']
    testcase.priority = data['priority']
    testcase.status = data['status']
    db.session.commit()
    return jsonify(testcase.to_dict())

@bp.route('/testcases/<int:id>', methods=['DELETE'])
def delete_testcase(id):
    testcase = TestCase.query.get_or_404(id)
    db.session.delete(testcase)
    db.session.commit()
    return '', 204
